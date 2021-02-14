import jwt from 'jsonwebtoken';
import { Body, Controller, Post, Route, Tags } from 'tsoa';
import { config } from '../../../config';
import { prisma } from '../../app';
import { hash } from '../../helpers/hash';

/**
 * @example {
 *   "loginId": "staff0",
 *   "password": "password"
 * }
 */
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
   * loginId / Password による従業員の認証
   */
  @Post()
  public async staffAuthenticateByCredential(@Body() params: AuthenticateInput): Promise<AuthenticateResponse> {
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

    this.setHeader('Set-Cookie', `token=${token}; MaxAge=${24 * 60 * 60}; HttpOnly`);

    return { token };
  }
}
