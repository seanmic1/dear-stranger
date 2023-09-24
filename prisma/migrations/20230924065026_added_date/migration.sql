/*
  Warnings:

  - Added the required column `letterDate` to the `Letter` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Letter" ADD COLUMN     "letterDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "responseDate" TIMESTAMP(3);
