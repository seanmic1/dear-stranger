/*
  Warnings:

  - Made the column `responseDate` on table `Letter` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Letter" ALTER COLUMN "letterDate" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "responseDate" SET NOT NULL,
ALTER COLUMN "responseDate" SET DEFAULT CURRENT_TIMESTAMP;
