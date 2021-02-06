// src/users/usersController.ts
import { Body, Controller, Get, Post, Route, SuccessResponse, Tags } from 'tsoa';

interface ParlourX {
  id: string;
  name: string;
}

interface ParlourCreateInput {
  name: string;
}

@Tags('parlours')
@Route('parlours')
export class ParloursController extends Controller {
  @Get()
  public async index(): Promise<ParlourX> {
    return { id: '1', name: 'foo' };
  }

  @SuccessResponse('201', 'Created') // Custom success response
  @Post()
  public async create(@Body() params: ParlourCreateInput): Promise<ParlourX> {
    this.setStatus(201); // set return status 201

    return { id: '1', name: params.name };
  }
}
