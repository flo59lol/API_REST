import "dotenv/config";

import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma/client.js";

const databaseUrl = new URL(process.env.DATABASE_URL!);

const adapter = new PrismaMariaDb({
    host: databaseUrl.hostname,
    port: Number(databaseUrl.port) || 3306,
    user: decodeURIComponent(databaseUrl.username),
    password: decodeURIComponent(databaseUrl.password),
    database: databaseUrl.pathname.replace("/", ""),
    connectionLimit: 5,
});

const prisma = new PrismaClient({
    adapter,
});

async function main() {
    // ============================================================
    // PROJECTS
    // ============================================================

    const project = await prisma.project.create({
        data: {
            name: "API Gestion de bibliothèque",
            description:
                "API REST développée avec Node.js, Prisma et MySQL.",
        },
    });

    await prisma.project.create({
        data: {
            name: "Application mobile",
            description:
                "Future application mobile permettant de consulter les livres.",
        },
    });

    // ============================================================
    // TASKS
    // ============================================================

    await prisma.task.createMany({
        data: [
            {
                name: "Créer les endpoints REST",
                description: "Créer les routes CRUD pour les livres.",
            },
            {
                name: "Ajouter l'authentification",
                description: "Mettre en place l'authentification des utilisateurs.",
            },
            {
                name: "Tester l'API",
                description: "Créer les tests des endpoints.",
            },
        ],
    });

    // ============================================================
    // PRODUCTS
    // ============================================================

    await prisma.product.createMany({
        data: [
            {
                name: "Carte membre",
                price: 5.99,
                quantity: 100,
            },
            {
                name: "Sac bibliothèque",
                price: 12.5,
                quantity: 50,
            },
            {
                name: "Carnet de lecture",
                price: 4.5,
                quantity: 75,
            },
        ],
    });

    // ============================================================
    // GENRES
    // ============================================================

    const fiction = await prisma.genre.create({
        data: {
            name: "Fiction",
            description: "Romans et œuvres de fiction.",
        },
    });

    const scienceFiction = await prisma.genre.create({
        data: {
            name: "Science-fiction",
            description: "Romans de science-fiction et mondes futuristes.",
        },
    });

    const classique = await prisma.genre.create({
        data: {
            name: "Classique",
            description: "Œuvres classiques de la littérature.",
        },
    });

    // ============================================================
    // AUTHORS
    // ============================================================

    const orwell = await prisma.author.create({
        data: {
            lastName: "Orwell",
            firstName: "George",
            nationality: "Britannique",
        },
    });

    const saintExupery = await prisma.author.create({
        data: {
            lastName: "Saint-Exupéry",
            firstName: "Antoine de",
            nationality: "Française",
        },
    });

    const asimov = await prisma.author.create({
        data: {
            lastName: "Asimov",
            firstName: "Isaac",
            nationality: "Américaine",
        },
    });

    const hugo = await prisma.author.create({
        data: {
            lastName: "Hugo",
            firstName: "Victor",
            nationality: "Française",
        },
    });

    // ============================================================
    // BOOKS
    // ============================================================

    const book1984 = await prisma.book.create({
        data: {
            isbn: "9780451524935",
            reference: "LIV-001",
            title: "1984",
            publicationDate: new Date("1949-06-08"),
            quantity: 5,
            genreId: scienceFiction.id,
        },
    });

    const petitPrince = await prisma.book.create({
        data: {
            isbn: "9782070612758",
            reference: "LIV-002",
            title: "Le Petit Prince",
            publicationDate: new Date("1943-04-06"),
            quantity: 8,
            genreId: fiction.id,
        },
    });

    const fondation = await prisma.book.create({
        data: {
            isbn: "9780553293357",
            reference: "LIV-003",
            title: "Fondation",
            publicationDate: new Date("1951-06-01"),
            quantity: 4,
            genreId: scienceFiction.id,
        },
    });

    const miserables = await prisma.book.create({
        data: {
            isbn: "9782253004226",
            reference: "LIV-004",
            title: "Les Misérables",
            publicationDate: new Date("1862-04-03"),
            quantity: 3,
            genreId: classique.id,
        },
    });

    // ============================================================
    // BOOK ↔ AUTHOR
    // ============================================================

    await prisma.bookAuthor.createMany({
        data: [
            {
                bookId: book1984.id,
                authorId: orwell.id,
            },
            {
                bookId: petitPrince.id,
                authorId: saintExupery.id,
            },
            {
                bookId: fondation.id,
                authorId: asimov.id,
            },
            {
                bookId: miserables.id,
                authorId: hugo.id,
            },
        ],
    });

    // ============================================================
    // MEMBERS
    // ============================================================

    const member1 = await prisma.member.create({
        data: {
            email: "jean.dupont@example.com",
            lastName: "Dupont",
            firstName: "Jean",
            phone: "0612345678",
            registrationDate: new Date("2026-01-15"),
        },
    });

    const member2 = await prisma.member.create({
        data: {
            email: "sophie.martin@example.com",
            lastName: "Martin",
            firstName: "Sophie",
            phone: "0698765432",
            registrationDate: new Date("2026-02-20"),
        },
    });

    const member3 = await prisma.member.create({
        data: {
            email: "lucas.bernard@example.com",
            lastName: "Bernard",
            firstName: "Lucas",
            phone: "0677777777",
            registrationDate: new Date("2026-03-10"),
        },
    });

    // ============================================================
    // LOANS
    // ============================================================

    await prisma.loan.create({
        data: {
            reference: "EMP-001",
            loanDate: new Date("2026-09-01"),
            dueDate: new Date("2026-09-15"),
            bookId: book1984.id,
            memberId: member1.id,
        },
    });

    await prisma.loan.create({
        data: {
            reference: "EMP-002",
            loanDate: new Date("2026-09-05"),
            dueDate: new Date("2026-09-19"),
            bookId: petitPrince.id,
            memberId: member2.id,
        },
    });

    await prisma.loan.create({
        data: {
            reference: "EMP-003",
            loanDate: new Date("2026-09-10"),
            dueDate: new Date("2026-09-24"),
            bookId: fondation.id,
            memberId: member3.id,
        },
    });

    // ============================================================
    // USERS
    // ============================================================

    await prisma.user.create({
        data: {
            username: "admin",
            email: "admin@example.com",
            role: "ADMIN",
            password: "password123",
        },
    });

    await prisma.user.create({
        data: {
            username: "bibliothecaire",
            email: "bibliothecaire@example.com",
            role: "LIBRARIAN",
            password: "password123",
        },
    });

    await prisma.user.create({
        data: {
            username: "user",
            email: "user@example.com",
            role: "USER",
            password: "password123",
        },
    });
}

main()
    .catch((error) => {
        console.error("Erreur pendant le seed :");
        console.error(error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });