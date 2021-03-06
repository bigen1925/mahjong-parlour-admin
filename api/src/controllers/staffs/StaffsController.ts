import { Staff } from '@prisma/client';
import { Body, Controller, Get, Post, Query, Route, Security, Tags } from 'tsoa';
import { prisma } from '../../app';
import { hash } from '../../helpers/hash';
import { Gender } from '../../types/tsoa';

type StaffCreateParams = {
  loginId: string;
  password: string;
  lastName: string;
  firstName: string;
  gender: Gender;
};

@Route('staffs')
@Tags('staffs')
@Security('jwt', ['staff'])
export class StaffsController extends Controller {
  /**
   * 従業員一覧の取得
   */
  @Get()
  async indexStaffs(@Query() working?: boolean, @Query() playing?: boolean): Promise<Staff[]> {
    return prisma.staff.findMany({
      where: {
        workingStaff: working === true ? { isNot: null } : working === false ? { is: null } : undefined,
        player: playing === true ? { isNot: { tableId: null } } : playing === false ? { tableId: null } : undefined,
      },
    });
  }

  /**
   * 従業員の作成
   */
  @Post()
  async createStaff(@Body() params: StaffCreateParams): Promise<Staff> {
    const org = await prisma.organization.findFirst();

    return prisma.staff.create({
      data: {
        ...params,
        password: hash(params.password),
        organization: {
          connect: { id: org?.id },
        },
        player: {
          create: {},
        },
      },
    });
  }
}
