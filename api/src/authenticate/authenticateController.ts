// src/users/usersController.ts
import jwt from 'jsonwebtoken';
import { Body, Controller, Post, Route, Tags } from 'tsoa';
import { config } from '../../config';
import { prisma } from '../app';
import { hash } from '../helpers/hash';

type AuthenticateInput = {
  loginId: string;
  password: string;
};
type AuthenticateResponse =
  | {
      token: string;
    }
  | {
      detail: string;
    };

@Tags('authenticate')
@Route('authenticate')
export class AuthenticateController extends Controller {
  @Post()
  public async authenticate(@Body() params: AuthenticateInput): Promise<AuthenticateResponse> {
    const staff = await prisma.staff.findUnique({
      where: { loginId: params.loginId },
    });

    if (!staff || staff.password !== hash(params.password)) {
      this.setStatus(401);
      return { detail: 'ログインできませんでした。 loginId または password が間違っていないかご確認ください。' };
    }

    const token = jwt.sign(
      {
        type: 'staff',
        staffId: staff.id,
      },
      config.encrypt.key,
      { expiresIn: '24h' }
    );

    return { token };
  }
}
