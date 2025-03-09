-- CreateTable
CREATE TABLE "academicweeks" (
    "active" BOOLEAN NOT NULL DEFAULT false,
    "end_date" DATE NOT NULL,
    "id" SERIAL NOT NULL,
    "locked" BOOLEAN NOT NULL DEFAULT false,
    "name" VARCHAR(50) NOT NULL,
    "start_date" DATE NOT NULL,

    CONSTRAINT "academicweeks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "courses" (
    "code" VARCHAR(20) NOT NULL,
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "semester" INTEGER NOT NULL,
    "specialization" VARCHAR(50) NOT NULL,

    CONSTRAINT "courses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "groups" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "semester" INTEGER NOT NULL,
    "specialization" VARCHAR(50) NOT NULL,

    CONSTRAINT "groups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "professors" (
    "department" VARCHAR(50),
    "email" VARCHAR(100),
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,

    CONSTRAINT "professors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "timeslots" (
    "day_of_week" INTEGER NOT NULL,
    "end_time" TIME NOT NULL,
    "id" SERIAL NOT NULL,
    "slot_index" INTEGER NOT NULL,
    "start_time" TIME NOT NULL,

    CONSTRAINT "timeslots_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "weeklyteachingloads" (
    "courseId" INTEGER NOT NULL,
    "groupId" INTEGER NOT NULL,
    "hours_required" INTEGER NOT NULL,
    "id" SERIAL NOT NULL,
    "teaching_type" VARCHAR(3) NOT NULL,
    "weekId" INTEGER NOT NULL,

    CONSTRAINT "weeklyteachingloads_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "weeklyprofessoravailability" (
    "id" SERIAL NOT NULL,
    "is_available" BOOLEAN NOT NULL,
    "professorId" INTEGER NOT NULL,
    "timeSlotId" INTEGER NOT NULL,
    "weekId" INTEGER NOT NULL,

    CONSTRAINT "weeklyprofessoravailability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "professorassignments" (
    "courseId" INTEGER NOT NULL,
    "groupId" INTEGER NOT NULL,
    "id" SERIAL NOT NULL,
    "professorId" INTEGER NOT NULL,
    "teaching_type" VARCHAR(3) NOT NULL,

    CONSTRAINT "professorassignments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "groupoverlaps" (
    "can_overlap" BOOLEAN NOT NULL DEFAULT false,
    "group1Id" INTEGER NOT NULL,
    "group2Id" INTEGER NOT NULL,
    "id" SERIAL NOT NULL,

    CONSTRAINT "groupoverlaps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rooms" (
    "capacity" INTEGER NOT NULL,
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "type" VARCHAR(10) NOT NULL,

    CONSTRAINT "rooms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "exceptionalclosures" (
    "id" SERIAL NOT NULL,
    "reason" VARCHAR(255),
    "timeSlotId" INTEGER NOT NULL,
    "weekId" INTEGER NOT NULL,

    CONSTRAINT "exceptionalclosures_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "schedule" (
    "courseId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "groupId" INTEGER NOT NULL,
    "id" SERIAL NOT NULL,
    "professorId" INTEGER NOT NULL,
    "roomId" INTEGER NOT NULL,
    "teaching_type" VARCHAR(3) NOT NULL,
    "timeSlotId" INTEGER NOT NULL,
    "weekId" INTEGER NOT NULL,

    CONSTRAINT "schedule_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "professors_email_key" ON "professors"("email");

-- AddForeignKey
ALTER TABLE "weeklyteachingloads" ADD CONSTRAINT "weeklyteachingloads_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "weeklyteachingloads" ADD CONSTRAINT "weeklyteachingloads_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "weeklyteachingloads" ADD CONSTRAINT "weeklyteachingloads_weekId_fkey" FOREIGN KEY ("weekId") REFERENCES "academicweeks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "weeklyprofessoravailability" ADD CONSTRAINT "weeklyprofessoravailability_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "professors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "weeklyprofessoravailability" ADD CONSTRAINT "weeklyprofessoravailability_timeSlotId_fkey" FOREIGN KEY ("timeSlotId") REFERENCES "timeslots"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "weeklyprofessoravailability" ADD CONSTRAINT "weeklyprofessoravailability_weekId_fkey" FOREIGN KEY ("weekId") REFERENCES "academicweeks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "professorassignments" ADD CONSTRAINT "professorassignments_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "professorassignments" ADD CONSTRAINT "professorassignments_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "professorassignments" ADD CONSTRAINT "professorassignments_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "professors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "groupoverlaps" ADD CONSTRAINT "groupoverlaps_group1Id_fkey" FOREIGN KEY ("group1Id") REFERENCES "groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "groupoverlaps" ADD CONSTRAINT "groupoverlaps_group2Id_fkey" FOREIGN KEY ("group2Id") REFERENCES "groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exceptionalclosures" ADD CONSTRAINT "exceptionalclosures_timeSlotId_fkey" FOREIGN KEY ("timeSlotId") REFERENCES "timeslots"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exceptionalclosures" ADD CONSTRAINT "exceptionalclosures_weekId_fkey" FOREIGN KEY ("weekId") REFERENCES "academicweeks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedule" ADD CONSTRAINT "schedule_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedule" ADD CONSTRAINT "schedule_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedule" ADD CONSTRAINT "schedule_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "professors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedule" ADD CONSTRAINT "schedule_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "rooms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedule" ADD CONSTRAINT "schedule_timeSlotId_fkey" FOREIGN KEY ("timeSlotId") REFERENCES "timeslots"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedule" ADD CONSTRAINT "schedule_weekId_fkey" FOREIGN KEY ("weekId") REFERENCES "academicweeks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
