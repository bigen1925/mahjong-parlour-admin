import { Player } from '@prisma/client';
import { Body, Controller, Patch, Path, Route, Security, Tags } from 'tsoa';
import { prisma } from '../../app';

type UpdatePlayerRequest = {
  tableId?: Nullable<string>;
  seat?: Nullable<number>;
};

type Nullable<T> = T | null;

@Route('players')
@Tags('players')
@Security('jwt', ['staff'])
export class PlayersController extends Controller {
  /**
   * プレイヤーの更新
   */
  @Patch('{playerId}')
  async updatePlayer(@Path() playerId: string, @Body() data: UpdatePlayerRequest): Promise<Player> {
    return prisma.player.update({
      data,
      include: { guest: true, staff: true },
      where: { id: playerId },
    });
  }

  /**
   * 顧客プレイヤーの更新
   */
  @Patch('as-guest/{guestId}')
  async updateGuestPlayer(@Path() guestId: string, @Body() data: UpdatePlayerRequest): Promise<Player> {
    const guest = await prisma.guest.findUnique({ where: { id: guestId } });

    return prisma.player.update({
      data,
      include: { guest: true, staff: true },
      where: { id: guest.playerId },
    });
  }

  /**
   * 従業員プレイヤーの更新
   */
  @Patch('as-staff/{staffId}')
  async updateStaffPlayer(@Path() staffId: string, @Body() data: UpdatePlayerRequest): Promise<Player> {
    const staff = await prisma.staff.findUnique({ where: { id: staffId } });

    return prisma.player.update({
      data,
      include: { guest: true, staff: true },
      where: { id: staff.playerId },
    });
  }
}
