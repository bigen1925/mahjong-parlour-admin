import { PrismaClient } from './client';
import { GENDER } from './constants';

const prisma = new PrismaClient();

function rangeTo(n: number): number[] {
  return Array(n)
    .fill(0)
    .map((_, i) => i);
}

async function main() {
  const org = await prisma.organization.upsert({
    create: { id: '228021ea-8b47-4bdc-a0ea-5fd9376012c1', name: '組織1' },
    update: {},
    where: { id: '228021ea-8b47-4bdc-a0ea-5fd9376012c1' },
  });

  const parlour = await prisma.parlour.upsert({
    create: {
      id: 'ccddec22-3309-426d-b9d9-aa0aa78267c3',
      name: '店舗1',
      organization: { connect: { id: org.id } },
    },
    update: {},
    where: { id: 'ccddec22-3309-426d-b9d9-aa0aa78267c3' },
  });

  const [guests, tables] = await Promise.all([
    Promise.all(
      rangeTo(20).map((i) =>
        prisma.guest.upsert({
          create: {
            id: 'ac4430b9-fd05-4443-8de1-32c719e543' + ('0' + i).slice(-2),
            lastName: 'お客様' + i,
            firstName: 'さん',
            gender: i % 2 ? GENDER.MALE : GENDER.FEMALE,
            organization: {
              connect: { id: org.id },
            },
            parlours: {
              connect: { id: parlour.id },
            },
          },
          update: {},
          where: {
            id: 'ac4430b9-fd05-4443-8de1-32c719e543' + ('0' + i).slice(-2),
          },
        })
      )
    ),
    Promise.all(
      rangeTo(4).map((i) =>
        prisma.table.upsert({
          create: {
            id: 'c8de113d-7f05-4664-b505-1411511fd40' + i,
            name: i + '卓',
            parlour: { connect: { id: parlour.id } },
          },
          update: {},
          where: {
            id: 'c8de113d-7f05-4664-b505-1411511fd40' + i,
          },
        })
      )
    ),
  ]);

  await Promise.all(
    rangeTo(6).map((i) =>
      prisma.player.upsert({
        create: {
          id: '8fe51527-8c93-487b-9ec3-ce51fa4435a' + i,
          seat: (i % 4) + 1,
          table: { connect: { id: tables[(i / 4) | 0].id } },
          guest: { connect: { id: guests[i].id } },
        },
        update: {},
        where: {
          id: '8fe51527-8c93-487b-9ec3-ce51fa4435a' + i,
        },
      })
    )
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
