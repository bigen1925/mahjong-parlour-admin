import { Request } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config';
import { Staff } from '../prisma/client';
import { prisma } from './app';
import { Forbidden, Unauthorized } from './exceptions/http';

type JWTPayload = {
  type: string;
  scope: string;
  staffId: string;
};

export async function expressAuthentication(request: Request, securityName: string, scopes?: string[]): Promise<Staff> {
  if (!request.token) {
    throw new Unauthorized('Tokenが設定されていません');
  }

  if (securityName !== 'jwt') {
    throw new Unauthorized('認証形式が不正です');
  }

  let payload: JWTPayload;
  try {
    payload = jwt.verify(request.token, config.encrypt.key) as JWTPayload;
  } catch {
    throw new Unauthorized('Tokenの形式が不正です');
  }

  const staff = await prisma.staff.findUnique({ where: { id: payload.staffId } });

  if (!staff) {
    throw new Unauthorized('ログインID または パスワード が間違っています。');
  }

  console.log('payload', payload);
  if (scopes) {
    const allowedScopes = payload.scope.split(' ');
    if (!allowedScopes.every((allowedScope) => scopes.includes(allowedScope))) {
      throw new Forbidden('権限が不足しています');
    }
  }

  return staff;
}
