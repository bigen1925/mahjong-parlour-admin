// src/users/usersController.ts
import { Body, Controller, Get, Post, Route, SuccessResponse } from 'tsoa';

interface Parlour {
  id: string;
  name: string;
}

interface ParlourCreateInput {
  name: string;
}

@Route('parlours')
export class ParloursController extends Controller {
  @Get()
  public async index(): Promise<Parlour> {
    return { id: '1', name: 'foo' };
  }

  @SuccessResponse('201', 'Created') // Custom success response
  @Post()
  public async create(@Body() params: ParlourCreateInput): Promise<Parlour> {
    this.setStatus(201); // set return status 201

    return { id: '1', name: params.name };
  }
}
