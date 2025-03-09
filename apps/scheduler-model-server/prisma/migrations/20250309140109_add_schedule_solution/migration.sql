-- AlterTable
ALTER TABLE "schedule" ADD COLUMN     "schedule_solution_id" INTEGER;

-- CreateTable
CREATE TABLE "schedulesolutions" (
    "id" SERIAL NOT NULL,
    "weekId" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "statistics" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_selected" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "schedulesolutions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "schedule" ADD CONSTRAINT "schedule_schedule_solution_id_fkey" FOREIGN KEY ("schedule_solution_id") REFERENCES "schedulesolutions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedulesolutions" ADD CONSTRAINT "schedulesolutions_weekId_fkey" FOREIGN KEY ("weekId") REFERENCES "academicweeks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
