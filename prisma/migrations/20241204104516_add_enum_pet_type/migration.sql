/*
  Warnings:

  - Changed the type of `type` on the `Pet` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "PetType" AS ENUM ('Bird', 'Dog', 'Fish', 'Cat', 'Bunny', 'Reptile');

-- AlterTable
ALTER TABLE "Pet" DROP COLUMN "type",
ADD COLUMN     "type" "PetType" NOT NULL;
