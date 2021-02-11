import { Controller, Get, Route, Tags } from 'tsoa';
import { Table } from '../../../prisma/client';
import { prisma } from '../../app';

@Route('tables')
@Tags('tables')
export class TablesController extends Controller {
  /**
   * 卓一覧の取得
   */
  @Get()
  public async indexTables(): Promise<Table[]> {
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
