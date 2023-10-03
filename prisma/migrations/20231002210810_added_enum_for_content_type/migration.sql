/*
  Warnings:

  - Added the required column `reportContentType` to the `Reports` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ContentType" AS ENUM ('LETTER', 'RESPONSE');

-- AlterTable
ALTER TABLE "Reports" ADD COLUMN     "reportContentType" "ContentType" NOT NULL;
