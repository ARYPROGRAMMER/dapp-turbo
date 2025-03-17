-- CreateEnum
CREATE TYPE "WebsiteStatus" AS ENUM ('UP', 'DOWN');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Website" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Website_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Validator" (
    "id" TEXT NOT NULL,
    "publicKey" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "ip" TEXT NOT NULL,

    CONSTRAINT "Validator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WebsiteTicker" (
    "id" TEXT NOT NULL,
    "websiteId" TEXT NOT NULL,
    "validatorId" TEXT NOT NULL,
    "ticker" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "latency" DOUBLE PRECISION NOT NULL,
    "status" "WebsiteStatus" NOT NULL,

    CONSTRAINT "WebsiteTicker_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "WebsiteTicker" ADD CONSTRAINT "WebsiteTicker_websiteId_fkey" FOREIGN KEY ("websiteId") REFERENCES "Website"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WebsiteTicker" ADD CONSTRAINT "WebsiteTicker_validatorId_fkey" FOREIGN KEY ("validatorId") REFERENCES "Validator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
