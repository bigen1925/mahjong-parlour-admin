import jwt from 'jsonwebtoken';
import { Body, Controller, Post, Route, Tags } from 'tsoa';
import { config } from '../../../config';
import { prisma } from '../../app';
import { hash } from '../../helpers/hash';

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

@Route('authenticate')
@Tags('authenticate')
export class AuthenticateController extends Controller {
  /**
   * 従業員の認証
   */
  @Post()
  public async authenticate(@Body() params: AuthenticateInput): Promise<AuthenticateResponse> {
    const staff = await prisma.staff.findUnique({
      where: { loginId: params.loginId },
    });

    if (!staff || staff.password !== hash(params.password)) {
      this.setStatus(400);
      return { detail: 'we could not authenticate you.' };
    }

    const token = jwt.sign(
      {
        scope: 'staff',
        staffId: staff.id,
      },
      config.encrypt.key,
      { expiresIn: '24h' }
    );

    return { token };
  }
}
