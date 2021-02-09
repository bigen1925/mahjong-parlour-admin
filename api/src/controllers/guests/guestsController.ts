import { Controller, Get, Route, Tags } from 'tsoa';
import { prisma } from '../../app';

interface GuestX {
  id: string;
  lastName: string;
  firstName: string;
}

@Route('guests')
@Tags('guests')
export class GuestsController extends Controller {
  @Get()
  public async index(): Promise<GuestX[]> {
    return await prisma.guest.findMany();
  }
}
