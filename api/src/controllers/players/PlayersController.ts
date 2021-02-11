import { Body, Controller, Patch, Path, Route, Tags } from 'tsoa';
import { Player } from '../../../prisma/client';
import { prisma } from '../../app';

type UpdatePlayerRequest = {
  tableId?: Nullable<string>;
  seat?: Nullable<number>;
};

type Nullable<T> = T | null;

@Route('players')
@Tags('players')
export class PlayersController extends Controller {
  /**
   * プレイヤーの更新
   */
  @Patch('{playerId}')
  public async updatePlayer(@Path() playerId: string, @Body() data: UpdatePlayerRequest): Promise<Player> {
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
  public async updateGuestPlayer(@Path() guestId: string, @Body() data: UpdatePlayerRequest): Promise<Player> {
    const guest = await prisma.guest.findUnique({ where: { id: guestId } });

    return prisma.player.update({
      data,
      include: { guest: true, staff: true },
      where: { id: guest.playerId },
    });
  }
}
