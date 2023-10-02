/*
  Warnings:

  - You are about to drop the `Reports` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Reports";

-- CreateTable
CREATE TABLE "Report" (
    "reportId" SERIAL NOT NULL,
    "reportDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reportContentType" "ContentType" NOT NULL,
    "reportContent" TEXT NOT NULL,
    "reportContentAuthorEmail" TEXT NOT NULL,
    "reportCreatorEmail" TEXT NOT NULL,

    CONSTRAINT "Report_pkey" PRIMARY KEY ("reportId")
);
