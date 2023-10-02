-- AlterTable
ALTER TABLE "Letter" ADD COLUMN     "letterIsSpam" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "responseIsSpam" BOOLEAN NOT NULL DEFAULT false;
