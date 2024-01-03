-- AlterTable
ALTER TABLE `accounts` MODIFY `access_token` TEXT NULL,
    MODIFY `id_token` TEXT NULL;

-- AlterTable
ALTER TABLE `books` MODIFY `summary` VARCHAR(500) NOT NULL;

-- AlterTable
ALTER TABLE `ratings` MODIFY `description` VARCHAR(500) NOT NULL;
