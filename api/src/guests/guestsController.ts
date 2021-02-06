// src/users/usersController.ts
import { Controller, Get, Route } from 'tsoa';
import { prisma } from '../app';

interface Guest {
  id: string;
  lastName: string;
  firstName: string;
}

@Route('guests')
export class GuestsController extends Controller {
  @Get()
  public async index(): Promise<Guest[]> {
    return await prisma.guest.findMany();
  }
}
