import { PrismaClient } from '@prisma/client';
import { ValidateError } from '@tsoa/runtime';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import bearerToken from 'express-bearer-token';
import swaggerUi from 'swagger-ui-express';
import { RegisterRoutes } from '../build/routes';
import swaggerDocument from '../build/swagger.json';
import { config } from '../config';
import { HttpError } from './exceptions/HttpError';

export const app = express();
export const prisma = new PrismaClient({
  rejectOnNotFound: true,
  log: process.env.NODE_ENV === 'development' ? ['query', 'info', `warn`, `error`] : ['warn', 'error'],
});

// Use body parser to read sent json payloads
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// CORS
app.use(cors());

// Cookie
app.use(cookieParser());

// Token
app.use(
  bearerToken({
    cookie: { signed: true, secret: config.encrypt.key, key: 'MPA_TOKEN' },
  })
);

// tsoa routes
RegisterRoutes(app);

// Swagger UI
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Error Handlers
app.use(function (err: unknown, req: Request, res: Response, next: NextFunction): Response | void {
  if (err instanceof ValidateError) {
    console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
    return res.status(422).json({
      message: 'Validation Failed',
      details: err?.fields,
    });
  }

  if (err instanceof HttpError) {
    return res.status(err.statusCode).json({
      message: err.message,
      detail: err.detail,
    });
  }

  next(err);
});
