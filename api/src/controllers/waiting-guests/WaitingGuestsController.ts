import { Prisma } from '@prisma/client';
import { Body, Controller, Delete, Path, Post, Route, Security, SuccessResponse, Tags } from 'tsoa';
import { prisma } from '../../app';
import { NotFound } from '../../exceptions/HttpError';

@Route('waiting-guests')
@Tags('waiting-guests')
@Security('jwt', ['staff'])
export class WaitingGuestsController extends Controller {
  /**
   * 待ち客の追加
   */
  @Post()
  @SuccessResponse(201, 'Created')
  async createWaitingGuest(@Body() params: { guestId: string }): Promise<void> {
    await prisma.waitingGuest.create({
      data: { guestId: params.guestId },
    });
    this.setStatus(201);
    return;
  }

  /**
   * 待ち客の削除
   */
  @Delete('{guestId}')
  @SuccessResponse(204, 'No Content')
  async deleteWaitingGuest(@Path() guestId: string): Promise<void> {
    await prisma.waitingGuest.delete({ where: { guestId } }).catch((err) => {
      if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === 'P2016') {
        this.setStatus(404);
        throw new NotFound('待ち客が存在しません。');
      }
      throw err;
    });

    return this.setStatus(204);
  }
}
