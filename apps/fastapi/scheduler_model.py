from typing import Dict, List, Tuple, Any, Optional
import numpy as np
from ortools.linear_solver import pywraplp

class SchedulerModel:
    """
    University course scheduling model using integer linear programming.
    """
    def __init__(self):
        """Initialize the scheduler model."""
        # Core dimensions
        self.J = 0  # Number of courses/subjects
        self.G = 0  # Number of groups
        self.I = 0  # Number of professors
        self.K = 25  # Number of time slots (default: 5 days × 5 slots)
        self.S = 4   # Number of general classrooms (default)
        self.STP = 2  # Number of lab rooms (default)
        
        # Data structures
        self.courses = []     # Course names
        self.groups = []      # Group names
        self.professors = []  # Professor names
        
        # Teaching loads
        self.Pcm = []  # CM (Lecture) hours per course and group
        self.Ptp = []  # TP (Lab) hours per course and group
        self.Ptd = []  # TD (Tutorial) hours per course and group
        
        # Professor assignments and availability
        self.Ccm = []  # CM course-group combinations assigned to each professor
        self.Ctp = []  # TP course-group combinations assigned to each professor
        self.Ctd = []  # TD course-group combinations assigned to each professor
        self.Dik = []  # Professor availability for each time slot
        
        # Group overlaps (groups that can't have sessions at the same time)
        self.A = []
        
        # Time slot indices
        self.time_slots = []
        
        # Solver and variables
        self.solver = None
        self.X = None  # CM (Lecture) variables
        self.Y = None  # TP (Lab) variables
        self.Z = None  # TD (Tutorial) variables
        
        # Results
        self.status = None
        self.solution = {}

    def load_data_from_dict(self, data: Dict[str, Any]) -> None:
        """
        Load data from a dictionary.
        Args:
            data: Dictionary containing all required data
        """
        # Core dimensions
        self.J = data.get('J', 0)
        self.G = data.get('G', 0)
        self.I = data.get('I', 0)
        self.K = data.get('K', 25)
        self.S = data.get('S', 4)
        self.STP = data.get('STP', 2)
        
        # Data structures
        self.courses = data.get('courses', [])
        self.groups = data.get('groups', [])
        self.professors = data.get('professors', [])
        
        # Teaching loads
        self.Pcm = data.get('Pcm', [])
        self.Ptp = data.get('Ptp', [])
        self.Ptd = data.get('Ptd', [])
        
        # Professor assignments and availability
        self.Ccm = data.get('Ccm', [])
        self.Ctp = data.get('Ctp', [])
        self.Ctd = data.get('Ctd', [])
        self.Dik = data.get('Dik', [])
        
        # Group overlaps
        self.A = data.get('A', [])
        
        # Time slot indices
        self.time_slots = []
        for day in ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']:
            for slot in ['8:00-9:30', '9:45-11:15', '11:30-13:00', '14:00-15:30', '15:45-17:15']:
                self.time_slots.append(f"{day} {slot}")
        
        # Store DB data if provided
        if '_db_data' in data:
            self.db_data = data['_db_data']
            
        print(f"Data loaded: {self.J} courses, {self.G} groups, {self.I} professors")

    def initialize_solver(self) -> None:
        """Initialize the OR-Tools solver."""
        self.solver = pywraplp.Solver.CreateSolver('CBC')
        if not self.solver:
            raise ValueError("Failed to create solver")
            
        print("Solver initialized")

    def create_variables(self) -> None:
        """Create decision variables for the model."""
        # CM (Lecture) variables
        self.X = [[[
            self.solver.IntVar(0, 1, f'X_{g}_{j}_{k}')
            for k in range(self.K)] for j in range(self.J)] for g in range(self.G)]
            
        # TP (Lab) variables
        self.Y = [[[
            self.solver.IntVar(0, 1, f'Y_{g}_{j}_{k}')
            for k in range(self.K)] for j in range(self.J)] for g in range(self.G)]
            
        # TD (Tutorial) variables
        self.Z = [[[
            self.solver.IntVar(0, 1, f'Z_{g}_{j}_{k}')
            for k in range(self.K)] for j in range(self.J)] for g in range(self.G)]
            
        print(f"Created {self.J*self.G*self.K*3} decision variables")

    def add_constraints(self) -> None:
        """Add all constraints to the model."""
        # Constraint 1: Complete course load for each subject and group
        for g in range(self.G):
            for j in range(self.J):
                # CM constraint
                if j < len(self.Pcm) and g < len(self.Pcm[j]):
                    self.solver.Add(
                        sum(self.X[g][j][k] for k in range(self.K)) == self.Pcm[j][g],
                        f'CM_load_{g}_{j}'
                    )
                
                # TP constraint
                if j < len(self.Ptp) and g < len(self.Ptp[j]):
                    self.solver.Add(
                        sum(self.Y[g][j][k] for k in range(self.K)) == self.Ptp[j][g],
                        f'TP_load_{g}_{j}'
                    )
                
                # TD constraint
                if j < len(self.Ptd) and g < len(self.Ptd[j]):
                    self.solver.Add(
                        sum(self.Z[g][j][k] for k in range(self.K)) == self.Ptd[j][g],
                        f'TD_load_{g}_{j}'
                    )
        
        # Constraint 2: A group can have at most one session in a time slot
        for g in range(self.G):
            for k in range(self.K):
                self.solver.Add(
                    sum(self.X[g][j][k] + self.Y[g][j][k] + self.Z[g][j][k] for j in range(self.J)) <= 1,
                    f'single_session_{g}_{k}'
                )
        
        # Constraint 3: Room capacity constraint - total sessions can't exceed available rooms
        for k in range(self.K):
            self.solver.Add(
                sum(self.X[g][j][k] + self.Y[g][j][k] + self.Z[g][j][k]
                    for j in range(self.J) for g in range(self.G)) <= self.S,
                f'room_capacity_{k}'
            )
        
        # Constraint 4: TP room capacity constraint
        for k in range(self.K):
            self.solver.Add(
                sum(self.Y[g][j][k] for j in range(self.J) for g in range(self.G)) <= self.STP,
                f'tp_room_capacity_{k}'
            )
        
        # Constraint 5: Group overlap constraint
        for k in range(self.K):
            for a in self.A:
                g1, g2 = a[0], a[1]
                if g1 < self.G and g2 < self.G:
                    self.solver.Add(
                        sum(self.X[g1][j][k] + self.Y[g1][j][k] + self.Z[g1][j][k] +
                            self.X[g2][j][k] + self.Y[g2][j][k] + self.Z[g2][j][k]
                            for j in range(self.J)) <= 1,
                        f'overlap_{g1}_{g2}_{k}'
                    )
        
        # Constraint 6: Professor availability constraint
        for i in range(self.I):
            for k in range(self.K):
                if i < len(self.Dik) and k < len(self.Dik[i]):
                    s = int(self.Dik[i][k])
                    
                    # Sum of all classes taught by professor i in time slot k
                    self.solver.Add(
                        sum(self.X[h[0]][h[1]][k] for h in self.Ccm[i] if h[0] < self.G and h[1] < self.J) +
                        sum(self.Y[h[0]][h[1]][k] for h in self.Ctp[i] if h[0] < self.G and h[1] < self.J) +
                        sum(self.Z[h[0]][h[1]][k] for h in self.Ctd[i] if h[0] < self.G and h[1] < self.J) <= s,
                        f'prof_availability_{i}_{k}'
                    )
        
        # Constraint 7: Professor assignment constraint
        for i in range(self.I):
            # CM assignments
            for h in self.Ccm[i]:
                if h[0] < self.G and h[1] < self.J and h[1] < len(self.Pcm) and h[0] < len(self.Pcm[h[1]]):
                    g, j = h[0], h[1]
                    self.solver.Add(
                        sum(self.X[g][j][k] for k in range(self.K)) == self.Pcm[j][g],
                        f'prof_CM_assignment_{i}_{g}_{j}'
                    )
            
            # TP assignments
            for h in self.Ctp[i]:
                if h[0] < self.G and h[1] < self.J and h[1] < len(self.Ptp) and h[0] < len(self.Ptp[h[1]]):
                    g, j = h[0], h[1]
                    self.solver.Add(
                        sum(self.Y[g][j][k] for k in range(self.K)) == self.Ptp[j][g],
                        f'prof_TP_assignment_{i}_{g}_{j}'
                    )
            
            # TD assignments
            for h in self.Ctd[i]:
                if h[0] < self.G and h[1] < self.J and h[1] < len(self.Ptd) and h[0] < len(self.Ptd[h[1]]):
                    g, j = h[0], h[1]
                    self.solver.Add(
                        sum(self.Z[g][j][k] for k in range(self.K)) == self.Ptd[j][g],
                        f'prof_TD_assignment_{i}_{g}_{j}'
                    )
                    
        print("All constraints added")

    def solve(self) -> bool:
        """
        Solve the model.
        Returns:
            bool: True if a solution was found, False otherwise
        """
        print("Solving model...")
        self.status = self.solver.Solve()
        
        if self.status == pywraplp.Solver.OPTIMAL:
            print("Optimal solution found!")
            return True
        elif self.status == pywraplp.Solver.FEASIBLE:
            print("Feasible solution found")
            return True
        else:
            print("No solution found")
            return False

    def extract_solution(self) -> Dict[str, Any]:
        """
        Extract the solution into a structured format.
        Returns:
            Dict: Solution information
        """
        if self.status not in [pywraplp.Solver.OPTIMAL, pywraplp.Solver.FEASIBLE]:
            return {"status": "No solution", "schedule": []}
        
        # Build the schedule
        schedule = []
        
        for k in range(self.K):
            slot_info = {
                "time_slot": self.time_slots[k] if k < len(self.time_slots) else f"Slot {k}",
                "sessions": []
            }
            
            for g in range(self.G):
                for j in range(self.J):
                    # CM sessions
                    if j < len(self.Pcm) and g < len(self.Pcm[j]) and self.X[g][j][k].solution_value() > 0.5:
                        group_name = self.groups[g] if g < len(self.groups) else f"Group {g}"
                        course_name = self.courses[j] if j < len(self.courses) else f"Course {j}"
                        
                        # Find professor for this CM session
                        prof_name = "Unknown"
                        for i in range(self.I):
                            if [g, j] in self.Ccm[i]:
                                prof_name = self.professors[i] if i < len(self.professors) else f"Prof {i}"
                                break
                        
                        slot_info["sessions"].append({
                            "group": group_name,
                            "course": course_name,
                            "type": "CM",
                            "professor": prof_name
                        })
                    
                    # TP sessions
                    if j < len(self.Ptp) and g < len(self.Ptp[j]) and self.Y[g][j][k].solution_value() > 0.5:
                        group_name = self.groups[g] if g < len(self.groups) else f"Group {g}"
                        course_name = self.courses[j] if j < len(self.courses) else f"Course {j}"
                        
                        # Find professor for this TP session
                        prof_name = "Unknown"
                        for i in range(self.I):
                            if [g, j] in self.Ctp[i]:
                                prof_name = self.professors[i] if i < len(self.professors) else f"Prof {i}"
                                break
                        
                        slot_info["sessions"].append({
                            "group": group_name,
                            "course": course_name,
                            "type": "TP",
                            "professor": prof_name
                        })
                    
                    # TD sessions
                    if j < len(self.Ptd) and g < len(self.Ptd[j]) and self.Z[g][j][k].solution_value() > 0.5:
                        group_name = self.groups[g] if g < len(self.groups) else f"Group {g}"
                        course_name = self.courses[j] if j < len(self.courses) else f"Course {j}"
                        
                        # Find professor for this TD session
                        prof_name = "Unknown"
                        for i in range(self.I):
                            if [g, j] in self.Ctd[i]:
                                prof_name = self.professors[i] if i < len(self.professors) else f"Prof {i}"
                                break
                        
                        slot_info["sessions"].append({
                            "group": group_name,
                            "course": course_name,
                            "type": "TD",
                            "professor": prof_name
                        })
            
            if slot_info["sessions"]:
                schedule.append(slot_info)
        
        # Model statistics
        stats = {
            "objective_value": self.solver.Objective().Value(),
            "wall_time": self.solver.wall_time() / 1000.0,  # Convert from ms to seconds
            "iterations": self.solver.iterations(),
            "nodes": self.solver.nodes(),  # Using nodes() instead of branches()
            "status": "Optimal" if self.status == pywraplp.Solver.OPTIMAL else "Feasible"
        }
        
        self.solution = {
            "status": stats["status"],
            "schedule": schedule,
            "statistics": stats
        }
        
        return self.solution

    def run(self, data: Dict[str, Any]) -> Dict[str, Any]:
        """
        Run the complete scheduling process.
        Args:
            data: Dictionary containing all required data
        Returns:
            Dict: Solution information
        """
        # Load data
        self.load_data_from_dict(data)
        
        # Initialize solver
        self.initialize_solver()
        
        # Create variables
        self.create_variables()
        
        # Add constraints
        self.add_constraints()
        
        # Solve the model
        success = self.solve()
        
        # Extract solution
        if success:
            return self.extract_solution()
        else:
            return {"status": "No solution", "schedule": []}