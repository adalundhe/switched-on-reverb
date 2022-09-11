/*
  Warnings:

  - You are about to drop the column `thumbnaill` on the `ListingPhoto` table. All the data in the column will be lost.
  - Added the required column `thumbnail` to the `ListingPhoto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ListingPhoto" DROP COLUMN "thumbnaill",
ADD COLUMN     "thumbnail" TEXT NOT NULL;
