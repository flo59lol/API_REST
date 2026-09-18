-- CreateTable
CREATE TABLE `genres` (
    `id_genre` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,

    PRIMARY KEY (`id_genre`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `livres` (
    `id_livre` INTEGER NOT NULL AUTO_INCREMENT,
    `isbn` VARCHAR(191) NOT NULL,
    `reference` VARCHAR(191) NOT NULL,
    `titre` VARCHAR(191) NOT NULL,
    `date_publication` DATETIME(3) NULL,
    `quantite` INTEGER NULL,
    `id_genre` INTEGER NOT NULL,

    PRIMARY KEY (`id_livre`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `emprunts` (
    `id_emprunt` INTEGER NOT NULL AUTO_INCREMENT,
    `reference` VARCHAR(191) NOT NULL,
    `date_emprunt` DATETIME(3) NULL,
    `date_retoure_prevue` DATETIME(3) NULL,
    `id_livre` INTEGER NOT NULL,
    `id_membre` INTEGER NOT NULL,

    PRIMARY KEY (`id_emprunt`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `livres` ADD CONSTRAINT `livres_id_genre_fkey` FOREIGN KEY (`id_genre`) REFERENCES `genres`(`id_genre`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `emprunts` ADD CONSTRAINT `emprunts_id_livre_fkey` FOREIGN KEY (`id_livre`) REFERENCES `livres`(`id_livre`) ON DELETE RESTRICT ON UPDATE CASCADE;
