-- CreateTable
CREATE TABLE `livre_auteurs` (
    `id_livre` INTEGER NOT NULL,
    `id_auteur` INTEGER NOT NULL,

    PRIMARY KEY (`id_livre`, `id_auteur`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `livre_auteurs` ADD CONSTRAINT `livre_auteurs_id_livre_fkey` FOREIGN KEY (`id_livre`) REFERENCES `livres`(`id_livre`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `livre_auteurs` ADD CONSTRAINT `livre_auteurs_id_auteur_fkey` FOREIGN KEY (`id_auteur`) REFERENCES `auteurs`(`id_auteur`) ON DELETE RESTRICT ON UPDATE CASCADE;
