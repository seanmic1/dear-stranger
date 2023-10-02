-- CreateTable
CREATE TABLE "Reports" (
    "reportId" SERIAL NOT NULL,
    "reportDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reportContent" TEXT NOT NULL,
    "reportContentAuthorEmail" TEXT NOT NULL,
    "reportCreatorEmail" TEXT NOT NULL,

    CONSTRAINT "Reports_pkey" PRIMARY KEY ("reportId")
);
