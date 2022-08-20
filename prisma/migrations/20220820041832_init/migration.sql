-- CreateTable
CREATE TABLE "Listing" (
    "id" TEXT NOT NULL,
    "reverbId" INTEGER NOT NULL,
    "make" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "finish" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "condition" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "currency" TEXT NOT NULL,
    "available" INTEGER NOT NULL,
    "acceptingOffers" BOOLEAN NOT NULL,
    "state" TEXT NOT NULL,

    CONSTRAINT "Listing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ListingPhoto" (
    "id" TEXT NOT NULL,
    "full" TEXT NOT NULL,
    "large" TEXT NOT NULL,
    "small" TEXT NOT NULL,
    "thumbnaill" TEXT NOT NULL,
    "reverbId" INTEGER NOT NULL,

    CONSTRAINT "ListingPhoto_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Listing_reverbId_key" ON "Listing"("reverbId");

-- CreateIndex
CREATE UNIQUE INDEX "ListingPhoto_reverbId_key" ON "ListingPhoto"("reverbId");

-- AddForeignKey
ALTER TABLE "ListingPhoto" ADD CONSTRAINT "ListingPhoto_reverbId_fkey" FOREIGN KEY ("reverbId") REFERENCES "Listing"("reverbId") ON DELETE CASCADE ON UPDATE CASCADE;
