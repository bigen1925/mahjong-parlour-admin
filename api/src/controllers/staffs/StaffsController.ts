import { Body, Controller, Post, Route, Tags } from 'tsoa';
import { prisma } from '../../app';
import { hash } from '../../helpers/hash';

interface StaffResponse {
  id: string;
  lastName: string;
  firstName: string;
}

type StaffCreateParams = {
  loginId: string;
  password: string;
};

@Route('staffs')
@Tags('staffs')
export class StaffsController extends Controller {
  /**
   * 従業員の作成
   */
  @Post()
  public async createStaff(@Body() params: StaffCreateParams): Promise<StaffResponse> {
    const org = await prisma.organization.findFirst();

    return prisma.staff.create({
      data: {
        loginId: params.loginId,
        password: hash(params.password),
        lastName: params.loginId + '姓',
        firstName: params.loginId + '名',
        gender: 0,
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