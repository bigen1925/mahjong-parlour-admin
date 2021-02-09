import { Controller, Get, Route, Tags } from 'tsoa';
import { Table } from '../../../prisma/client';
import { prisma } from '../../app';

@Route('tables')
@Tags('tables')
export class TablesController extends Controller {
  @Get()
  public async indexTables(): Promise<Table[]> {
    const tables = await prisma.table.findMany({
      include: {
        players: {
          include: {
            guest: true,
            staff: true,
          },
        },
      },
    });
    console.log('tables', tables);
    return tables;
  }
}
