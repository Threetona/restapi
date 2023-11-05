import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

// initialize Prisma Client
const prisma = new PrismaClient();

const roundsOfHashing = 10;

async function main() {
    // create two dummy users
    const passwordNanda = await bcrypt.hash('nanda123', roundsOfHashing);
    const passwordKiki = await bcrypt.hash('password-kiki', roundsOfHashing);

    // create three dummy role
    const role1 = await prisma.role.upsert({
        where: { id: 1 },
        update: {},
        create: {
            name: 'Administrator',
            inactive: true,
        },
    });

    const role2 = await prisma.role.upsert({
        where: { id: 2 },
        update: {},
        create: {
            name: 'superuser',
            inactive: true,
        },
    });

    // create three dummy user
    const user1 = await prisma.user.upsert({
        where: { email: 'nandatritona@gmail.com' },
        update: {
            password: passwordNanda,
            roleId: role1.id,
        },
        create: {
            email: 'nandatritona@gmail.com',
            name: 'Nanda Tritona',
            password: passwordNanda,
            roleId: role1.id,
        },
    });

    const user2 = await prisma.user.upsert({
        where: { email: 'kiki@ruheni.com' },
        update: {
            password: passwordKiki,
            roleId: role2.id,
        },
        create: {
            email: 'kiki@ruheni.com',
            name: 'Kiki Ruheni',
            password: passwordKiki,
            roleId: role2.id,
        },
    });

    // create three dummy articles
    const post1 = await prisma.article.upsert({
        where: { title: 'Prisma Adds Support for MongoDB' },
        update: {
            authorId: user1.id,
        },
        create: {
            title: 'Prisma Adds Support for MongoDB',
            body: 'Support for MongoDB has been one of the most requested features since the initial release of...',
            description:
                "We are excited to share that today's Prisma ORM release adds stable support for MongoDB!",
            published: false,
            authorId: user1.id,
        },
    });

    const post2 = await prisma.article.upsert({
        where: { title: "What's new in Prisma? (Q1/22)" },
        update: {
            authorId: user2.id,
        },
        create: {
            title: "What's new in Prisma? (Q1/22)",
            body: 'Our engineers have been working hard, issuing new releases with many improvements...',
            description:
                'Learn about everything in the Prisma ecosystem and community from January to March 2022.',
            published: true,
            authorId: user2.id,
        },
    });

    const post3 = await prisma.article.upsert({
        where: { title: 'Prisma Client Just Became a Lot More Flexible' },
        update: {},
        create: {
            title: 'Prisma Client Just Became a Lot More Flexible',
            body: 'Prisma Client extensions provide a powerful new way to add functionality to Prisma in a type-safe manner...',
            description:
                'This article will explore various ways you can use Prisma Client extensions to add custom functionality to Prisma Client..',
            published: true,
        },
    });

    // create three dummy main menu
    const menu1 = await prisma.menu.upsert({
        where: { name: 'Dashboard' },
        update: {},
        create: {
            name: 'Dashboard',
            icon: 'svg1',
            ordering: 1,
            active: false,
        },
    });
    const menu2 = await prisma.menu.upsert({
        where: { name: 'Master' },
        update: {},
        create: {
            name: 'Master',
            icon: 'svg2',
            ordering: 1,
            active: false,
        },
    });

    // create three dummy sub menu
    const submenu1 = await prisma.subMenu.upsert({
        where: { name: 'Submenu' },
        update: {
            menuId: menu2.id,
        },
        create: {
            name: 'Submenu',
            icon: 'svg2',
            ordering: 1,
            active: false,
            menuId: menu2.id,
        },
    });

    // create three dummy sub menu 2
    const submenu2_1 = await prisma.subMenu2.upsert({
        where: { name: 'Submenu 2' },
        update: {
            subMenuId: submenu1.id,
        },
        create: {
            name: 'Submenu',
            icon: 'svg2',
            ordering: 1,
            active: false,
            subMenuId: submenu1.id,
        },
    });

    // create three dummy sub menu 3
    const submenu3_1 = await prisma.subMenu3.upsert({
        where: { name: 'Submenu 3 coba' },
        update: {
            subMenu2Id: submenu2_1.id,
        },
        create: {
            name: 'Submenu',
            icon: 'svg2',
            ordering: 1,
            active: false,
            subMenu2Id: submenu2_1.id,
        },
    });

    // create three dummy sub menu 3
    const permission1 = await prisma.permission.upsert({
        where: { id: 1 },
        update: {
            roleId: role1.id,
        },
        create: {
            roleId: 1,
            menuId: 1,
        },
    });

    console.log({
        role1,
        role2,
        user1,
        user2,
        post1,
        post2,
        post3,
        menu1,
        menu2,
        submenu1,
        submenu2_1,
        submenu3_1,
        permission1,
    });
}

// execute the main function
main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        // close Prisma Client at the end
        await prisma.$disconnect();
    });
