import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AcademicWeekList } from "./academicWeek/AcademicWeekList";
import { AcademicWeekCreate } from "./academicWeek/AcademicWeekCreate";
import { AcademicWeekEdit } from "./academicWeek/AcademicWeekEdit";
import { AcademicWeekShow } from "./academicWeek/AcademicWeekShow";
import { CourseList } from "./course/CourseList";
import { CourseCreate } from "./course/CourseCreate";
import { CourseEdit } from "./course/CourseEdit";
import { CourseShow } from "./course/CourseShow";
import { GroupList } from "./group/GroupList";
import { GroupCreate } from "./group/GroupCreate";
import { GroupEdit } from "./group/GroupEdit";
import { GroupShow } from "./group/GroupShow";
import { ProfessorList } from "./professor/ProfessorList";
import { ProfessorCreate } from "./professor/ProfessorCreate";
import { ProfessorEdit } from "./professor/ProfessorEdit";
import { ProfessorShow } from "./professor/ProfessorShow";
import { TimeSlotList } from "./timeSlot/TimeSlotList";
import { TimeSlotCreate } from "./timeSlot/TimeSlotCreate";
import { TimeSlotEdit } from "./timeSlot/TimeSlotEdit";
import { TimeSlotShow } from "./timeSlot/TimeSlotShow";
import { WeeklyTeachingLoadList } from "./weeklyTeachingLoad/WeeklyTeachingLoadList";
import { WeeklyTeachingLoadCreate } from "./weeklyTeachingLoad/WeeklyTeachingLoadCreate";
import { WeeklyTeachingLoadEdit } from "./weeklyTeachingLoad/WeeklyTeachingLoadEdit";
import { WeeklyTeachingLoadShow } from "./weeklyTeachingLoad/WeeklyTeachingLoadShow";
import { WeeklyProfessorAvailabilityList } from "./weeklyProfessorAvailability/WeeklyProfessorAvailabilityList";
import { WeeklyProfessorAvailabilityCreate } from "./weeklyProfessorAvailability/WeeklyProfessorAvailabilityCreate";
import { WeeklyProfessorAvailabilityEdit } from "./weeklyProfessorAvailability/WeeklyProfessorAvailabilityEdit";
import { WeeklyProfessorAvailabilityShow } from "./weeklyProfessorAvailability/WeeklyProfessorAvailabilityShow";
import { ProfessorAssignmentList } from "./professorAssignment/ProfessorAssignmentList";
import { ProfessorAssignmentCreate } from "./professorAssignment/ProfessorAssignmentCreate";
import { ProfessorAssignmentEdit } from "./professorAssignment/ProfessorAssignmentEdit";
import { ProfessorAssignmentShow } from "./professorAssignment/ProfessorAssignmentShow";
import { GroupOverlapList } from "./groupOverlap/GroupOverlapList";
import { GroupOverlapCreate } from "./groupOverlap/GroupOverlapCreate";
import { GroupOverlapEdit } from "./groupOverlap/GroupOverlapEdit";
import { GroupOverlapShow } from "./groupOverlap/GroupOverlapShow";
import { RoomList } from "./room/RoomList";
import { RoomCreate } from "./room/RoomCreate";
import { RoomEdit } from "./room/RoomEdit";
import { RoomShow } from "./room/RoomShow";
import { ExceptionalClosureList } from "./exceptionalClosure/ExceptionalClosureList";
import { ExceptionalClosureCreate } from "./exceptionalClosure/ExceptionalClosureCreate";
import { ExceptionalClosureEdit } from "./exceptionalClosure/ExceptionalClosureEdit";
import { ExceptionalClosureShow } from "./exceptionalClosure/ExceptionalClosureShow";
import { ScheduleList } from "./schedule/ScheduleList";
import { ScheduleCreate } from "./schedule/ScheduleCreate";
import { ScheduleEdit } from "./schedule/ScheduleEdit";
import { ScheduleShow } from "./schedule/ScheduleShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"SchedulerModel-1"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="AcademicWeek"
          list={AcademicWeekList}
          edit={AcademicWeekEdit}
          create={AcademicWeekCreate}
          show={AcademicWeekShow}
        />
        <Resource
          name="Course"
          list={CourseList}
          edit={CourseEdit}
          create={CourseCreate}
          show={CourseShow}
        />
        <Resource
          name="Group"
          list={GroupList}
          edit={GroupEdit}
          create={GroupCreate}
          show={GroupShow}
        />
        <Resource
          name="Professor"
          list={ProfessorList}
          edit={ProfessorEdit}
          create={ProfessorCreate}
          show={ProfessorShow}
        />
        <Resource
          name="TimeSlot"
          list={TimeSlotList}
          edit={TimeSlotEdit}
          create={TimeSlotCreate}
          show={TimeSlotShow}
        />
        <Resource
          name="WeeklyTeachingLoad"
          list={WeeklyTeachingLoadList}
          edit={WeeklyTeachingLoadEdit}
          create={WeeklyTeachingLoadCreate}
          show={WeeklyTeachingLoadShow}
        />
        <Resource
          name="WeeklyProfessorAvailability"
          list={WeeklyProfessorAvailabilityList}
          edit={WeeklyProfessorAvailabilityEdit}
          create={WeeklyProfessorAvailabilityCreate}
          show={WeeklyProfessorAvailabilityShow}
        />
        <Resource
          name="ProfessorAssignment"
          list={ProfessorAssignmentList}
          edit={ProfessorAssignmentEdit}
          create={ProfessorAssignmentCreate}
          show={ProfessorAssignmentShow}
        />
        <Resource
          name="GroupOverlap"
          list={GroupOverlapList}
          edit={GroupOverlapEdit}
          create={GroupOverlapCreate}
          show={GroupOverlapShow}
        />
        <Resource
          name="Room"
          list={RoomList}
          edit={RoomEdit}
          create={RoomCreate}
          show={RoomShow}
        />
        <Resource
          name="ExceptionalClosure"
          list={ExceptionalClosureList}
          edit={ExceptionalClosureEdit}
          create={ExceptionalClosureCreate}
          show={ExceptionalClosureShow}
        />
        <Resource
          name="Schedule"
          list={ScheduleList}
          edit={ScheduleEdit}
          create={ScheduleCreate}
          show={ScheduleShow}
        />
      </Admin>
    </div>
  );
};

export default App;
