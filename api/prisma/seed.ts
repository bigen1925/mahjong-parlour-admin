import { PrismaClient } from '@prisma/client';
import { hash } from '../src/helpers/hash';
import { GENDER } from './constants';

const prisma = new PrismaClient();

function rangeTo(n: number): number[] {
  return Array(n)
    .fill(0)
    .map((_, i) => i);
}

async function main() {
  // 組織
  const org = await prisma.organization.upsert({
    create: { id: '228021ea-8b47-4bdc-a0ea-5fd9376012c1', name: '組織1' },
    update: {},
    where: { id: '228021ea-8b47-4bdc-a0ea-5fd9376012c1' },
  });
  // 店舗
  const parlour = await prisma.parlour.upsert({
    create: {
      id: 'ccddec22-3309-426d-b9d9-aa0aa78267c3',
      name: '店舗1',
      organizationId: org.id,
    },
    update: {},
    where: { id: 'ccddec22-3309-426d-b9d9-aa0aa78267c3' },
  });
  // 卓
  const tables = await Promise.all(
    rangeTo(4).map((i) =>
      prisma.table.upsert({
        create: {
          id: 'c8de113d-7f05-4664-b505-1411511fd40' + i,
          name: i + '卓',
          parlourId: parlour.id,
        },
        update: {},
        where: {
          id: 'c8de113d-7f05-4664-b505-1411511fd40' + i,
        },
      })
    )
  );

  // 従業員プレイヤーの作成
  const staffPlayers = await Promise.all(
    rangeTo(10).map((i) =>
      prisma.player.upsert({
        create: {
          id: 'a5ace86f-d486-4b38-b157-54c424c8bc6' + i,
        },
        update: {},
        where: {
          id: 'a5ace86f-d486-4b38-b157-54c424c8bc6' + i,
        },
      })
    )
  );

  await Promise.all(
    staffPlayers.map((player, i) =>
      prisma.staff.upsert({
        create: {
          id: '37968687-ffba-4fb8-8a00-2e54fd9cb86' + i,
          loginId: 'staff' + i,
          password: hash('password'),
          lastName: '従業員' + i,
          firstName: 'さん',
          gender: GENDER.FEMALE,
          organizationId: org.id,
          playerId: player.id,
        },
        update: {},
        where: {
          id: '37968687-ffba-4fb8-8a00-2e54fd9cb86' + i,
        },
      })
    )
  );

  // 顧客プレイヤーの作成
  const guestPlayers = await Promise.all(
    rangeTo(20).map((i) =>
      prisma.player.upsert({
        create: {
          id: '44762a66-573c-4576-9b24-cc66f39afc' + ('0' + i).slice(-2),
          // 最初の6人はテーブルに座らせる
          ...(i < 6 && {
            tableId: tables[(i / 4) | 0].id,
            seat: (i % 4) + 1,
          }),
        },
        update: {},
        where: {
          id: '44762a66-573c-4576-9b24-cc66f39afc' + ('0' + i).slice(-2),
        },
      })
    )
  );

  const guests = await Promise.all(
    guestPlayers.map((player, i) =>
      prisma.guest.upsert({
        create: {
          id: '90a689d9-131c-40e0-8180-4d84d68daf' + ('0' + i).slice(-2),
          lastName: 'お客様' + i,
          firstName: 'さん',
          gender: GENDER.MALE,
          organizationId: org.id,
          playerId: player.id,
        },
        update: {},
        where: {
          id: '90a689d9-131c-40e0-8180-4d84d68daf' + ('0' + i).slice(-2),
        },
      })
    )
  );

  // 待ち席
  await Promise.all(
    guests.slice(6, 10).map((guest, i) =>
      prisma.waitingGuest.upsert({
        create: {
          id: 'fbc96cd4-2bbf-448b-a3ea-f7dda2bc7c5' + i,
          guestId: guest.id,
        },
        update: {},
        where: {
          id: 'fbc96cd4-2bbf-448b-a3ea-f7dda2bc7c5' + i,
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
