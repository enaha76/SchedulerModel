from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Dict, List, Any, Optional
import os
from dotenv import load_dotenv

# Import the scheduler model
from scheduler_model import SchedulerModel

# Load environment variables
load_dotenv()

# Initialize FastAPI app
app = FastAPI(title="Scheduler Optimization Service")

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request and response models
class SessionBase(BaseModel):
    group: str
    course: str
    type: str
    professor: str

class TimeSlotBase(BaseModel):
    time_slot: str
    sessions: List[SessionBase]

class ScheduleRequest(BaseModel):
    scheduler_data: Dict[str, Any]

class ScheduleResponse(BaseModel):
    status: str
    schedule: List[TimeSlotBase]
    statistics: Optional[Dict[str, Any]] = None

@app.post("/api/optimize-schedule", response_model=ScheduleResponse)
async def optimize_schedule(request: ScheduleRequest):
    """
    Optimize a schedule using the provided data.
    This endpoint receives data from the NestJS backend, runs the optimization,
    and returns the optimized schedule.
    """
    try:
        # Initialize scheduler
        scheduler = SchedulerModel()
        
        # Run the scheduler with the data provided from NestJS
        solution = scheduler.run(request.scheduler_data)
        
        # Return the schedule
        return ScheduleResponse(
            status=solution["status"],
            schedule=solution["schedule"],
            statistics=solution.get("statistics")
        )
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error optimizing schedule: {str(e)}")

# Health check endpoint
@app.get("/health")
async def health_check():
    return {"status": "healthy"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)