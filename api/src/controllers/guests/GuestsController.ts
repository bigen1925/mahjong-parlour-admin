import { Controller, Get, Query, Route, Tags } from 'tsoa';
import { prisma } from '../../app';

interface GuestX {
  id: string;
  lastName: string;
  firstName: string;
}

@Route('guests')
@Tags('guests')
export class GuestsController extends Controller {
  /**
   * 顧客一覧の取得
   */
  @Get()
  public async indexGuest(@Query() waiting?: boolean, @Query() playing?: boolean): Promise<GuestX[]> {
    return await prisma.guest.findMany({
      where: {
        waitingGuest: waiting === true ? { isNot: null } : waiting === false ? { is: null } : undefined,
        player: playing === true ? { isNot: { tableId: null } } : playing === false ? { tableId: null } : undefined,
      },
    });
  }
}