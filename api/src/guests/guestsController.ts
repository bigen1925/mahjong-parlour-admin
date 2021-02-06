// src/users/usersController.ts
import { Controller, Get, Route } from 'tsoa';

interface Guest {
  id: string;
  lastName: string;
  firstName: string;
}

@Route('guests')
export class GuestsController extends Controller {
  @Get()
  public async index(): Promise<Guest[]> {
    const guests = [];
    for (let i = 0; i < 20; i++) {
      guests.push({
        id: i.toString(),
        lastName: 'お客様' + i,
        firstName: 'さん',
      });
    }
    return guests;
  }
}
