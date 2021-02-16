import { Request as ExRequest } from 'express';
import { Controller, Get, Request, Route, Tags } from 'tsoa';
import { Unauthorized } from '../../exceptions/HttpError';

type GetTokenResponse = {
  token: string;
};

@Route('token')
@Tags('token')
export class TokenController extends Controller {
  /**
   * CookieにセットされたTokenを取得する
   */
  @Get()
  async getToken(@Request() request: ExRequest): Promise<GetTokenResponse> {
    console.log('cookies', request.cookies);
    if (!request.cookies.token) {
      throw new Unauthorized('認証されていません');
    }

    return { token: request.cookies.token };
  }
}
