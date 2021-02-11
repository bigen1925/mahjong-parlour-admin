import { Body, Controller, Get, Post, Route, Security, SuccessResponse, Tags } from 'tsoa';

interface ParlourX {
  id: string;
  name: string;
}

interface ParlourCreateInput {
  name: string;
}

@Tags('parlours')
@Route('parlours')
@Security('jwt', ['read'])
export class ParloursController extends Controller {
  /**
   * 店舗一覧の取得
   */
  @Get()
  public async index(): Promise<ParlourX> {
    return { id: '1', name: 'foo' };
  }

  /**
   * 店舗の作成
   */
  @SuccessResponse('201', 'Created')
  @Post()
  public async create(@Body() params: ParlourCreateInput): Promise<ParlourX> {
    this.setStatus(201); // set return status 201

    return { id: '1', name: params.name };
  }
}
