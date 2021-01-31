import { PrismaClient } from './client';

const prisma = new PrismaClient();

async function main() {
    // const org = await prisma.organization.create({
    //     data: { name: '組織1' },
    // });
    //
    // const parlour = await prisma.parlour.create({
    //     data: { name: '店舗1', organizationId: org.id },
    // });
    //
    // for (let i = 1; i < 20; i++) {
    //     await prisma.guest.create({
    //         data: {
    //             firstName: 'お客様' + i,
    //             lastName: 'さん',
    //             gender: GENDER.MALE,
    //             organizationId: org.id,
    //         },
    //     });
    // }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
