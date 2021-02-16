import { Prisma } from '@prisma/client';
import { Body, Controller, Delete, Path, Post, Route, Security, SuccessResponse, Tags } from 'tsoa';
import { prisma } from '../../app';
import { NotFound } from '../../exceptions/HttpError';

@Route('working-staffs')
@Tags('working-staffs')
@Security('jwt', ['staff'])
export class WorkingStaffsController extends Controller {
  /**
   * 勤務中従業員の追加
   */
  @Post()
  @SuccessResponse(201, 'Created')
  async createWorkingStaff(@Body() params: { staffId: string }): Promise<void> {
    await prisma.workingStaff.create({
      data: { staffId: params.staffId },
    });
    this.setStatus(201);
    return;
  }

  /**
   * 待ち客の削除
   */
  @Delete('{staffId}')
  @SuccessResponse(204, 'No Content')
  async deleteWorkingStaff(@Path() staffId: string): Promise<void> {
    await prisma.workingStaff.delete({ where: { staffId } }).catch((err) => {
      if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === 'P2016') {
        this.setStatus(404);
        throw new NotFound('待ち客が存在しません。');
      }
      throw err;
    });

    return this.setStatus(204);
  }
}
