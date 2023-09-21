-- CreateTable
CREATE TABLE "User" (
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "country" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "Letter" (
    "id" SERIAL NOT NULL,
    "letterAuthorEmail" TEXT NOT NULL,
    "letterContent" TEXT NOT NULL,
    "responseAuthorEmail" TEXT,
    "responseContent" TEXT,

    CONSTRAINT "Letter_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Letter" ADD CONSTRAINT "Letter_letterAuthorEmail_fkey" FOREIGN KEY ("letterAuthorEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Letter" ADD CONSTRAINT "Letter_responseAuthorEmail_fkey" FOREIGN KEY ("responseAuthorEmail") REFERENCES "User"("email") ON DELETE SET NULL ON UPDATE CASCADE;
