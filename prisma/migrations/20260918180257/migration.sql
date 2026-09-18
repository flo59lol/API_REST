-- CreateTable
CREATE TABLE `auteurs` (
    `id_auteur` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `prenom` VARCHAR(191) NOT NULL,
    `nationalite` VARCHAR(191) NULL,

    PRIMARY KEY (`id_auteur`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `utilisateurs` (
    `id_utilisateur` INTEGER NOT NULL AUTO_INCREMENT,
    `nom_utilisateur` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NULL,
    `mot_de_passe` VARCHAR(191) NULL,

    PRIMARY KEY (`id_utilisateur`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
