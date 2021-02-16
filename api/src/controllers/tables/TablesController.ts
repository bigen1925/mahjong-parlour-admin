import { Table } from '@prisma/client';
import { Controller, Get, Route, Security, Tags } from 'tsoa';
import { prisma } from '../../app';

@Route('tables')
@Tags('tables')
@Security('jwt', ['staff'])
export class TablesController extends Controller {
  /**
   * 卓一覧の取得
   */
  @Get()
  async indexTables(): Promise<Table[]> {
    return await prisma.table.findMany({
      include: {
        players: {
          include: {
            guest: true,
            staff: true,
          },
        },
      },
    });
  }
}
