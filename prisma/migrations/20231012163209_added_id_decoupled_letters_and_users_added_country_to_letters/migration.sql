/*
  Warnings:

  - You are about to drop the column `letterAuthorEmail` on the `Letter` table. All the data in the column will be lost.
  - You are about to drop the column `responseAuthorEmail` on the `Letter` table. All the data in the column will be lost.
  - You are about to drop the column `reportContentAuthorEmail` on the `Report` table. All the data in the column will be lost.
  - You are about to drop the column `reportCreatorEmail` on the `Report` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `letterAuthorId` to the `Letter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `letterCountry` to the `Letter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reportContentAuthorId` to the `Report` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reportCreatorId` to the `Report` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `User` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "Letter" DROP CONSTRAINT "Letter_letterAuthorEmail_fkey";

-- DropForeignKey
ALTER TABLE "Letter" DROP CONSTRAINT "Letter_responseAuthorEmail_fkey";

-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "Letter" DROP COLUMN "letterAuthorEmail",
DROP COLUMN "responseAuthorEmail",
ADD COLUMN     "letterAuthorId" TEXT NOT NULL,
ADD COLUMN     "letterCountry" TEXT NOT NULL,
ADD COLUMN     "responseAuthorId" TEXT,
ADD COLUMN     "responseCountry" TEXT;

-- AlterTable
ALTER TABLE "Report" DROP COLUMN "reportContentAuthorEmail",
DROP COLUMN "reportCreatorEmail",
ADD COLUMN     "reportContentAuthorId" TEXT NOT NULL,
ADD COLUMN     "reportCreatorId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
