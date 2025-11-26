/*
  Warnings:

  - You are about to drop the column `capital` on the `Pais` table. All the data in the column will be lost.
  - You are about to drop the column `criadoEm` on the `Pais` table. All the data in the column will be lost.
  - Added the required column `curiosidade` to the `Pais` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idioma` to the `Pais` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Pais` DROP COLUMN `capital`,
    DROP COLUMN `criadoEm`,
    ADD COLUMN `curiosidade` VARCHAR(191) NOT NULL,
    ADD COLUMN `idioma` VARCHAR(191) NOT NULL;
