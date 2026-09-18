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
