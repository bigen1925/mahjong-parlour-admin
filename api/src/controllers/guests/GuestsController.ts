import { Guest } from '@prisma/client';
import { Body, Controller, Get, Path, Post, Query, Request, Route, Security, Tags } from 'tsoa';
import { prisma } from '../../app';
import { StaffAuthedRequest } from '../../authentication';
import { UUID } from '../../types/tsoa';

type CreateGuestParams = {
  lastName: string;
  firstName: string;
  gender: number;
  email: string;
  address: string;
};

@Route('guests')
@Tags('guests')
@Security('jwt', ['staff'])
export class GuestsController extends Controller {
  /**
   * 顧客一覧の取得
   */
  @Get()
  async indexGuests(@Query() waiting?: boolean, @Query() playing?: boolean): Promise<Guest[]> {
    return await prisma.guest.findMany({
      where: {
        waitingGuest: waiting === true ? { isNot: null } : waiting === false ? { is: null } : undefined,
        player: playing === true ? { isNot: { tableId: null } } : playing === false ? { tableId: null } : undefined,
      },
    });
  }

  /**
   * 顧客詳細の取得
   */
  @Get('{guestId}')
  async showGuest(@Path() guestId: UUID): Promise<Guest> {
    return await prisma.guest.findUnique({ where: { id: guestId } });
  }

  /**
   * 顧客の作成
   */
  @Security('jwt', ['staff'])
  @Post()
  async createGuest(@Request() request: StaffAuthedRequest, @Body() params: CreateGuestParams): Promise<Guest> {
    return prisma.guest.create({
      data: {
        ...params,
        organization: {
          connect: { id: request.staff.organizationId },
        },
        player: {
          create: {},
        },
      },
    });
  }
}
