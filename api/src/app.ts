import { ValidateError } from '@tsoa/runtime';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import bearerToken from 'express-bearer-token';
import swaggerUi from 'swagger-ui-express';
import { RegisterRoutes } from '../build/routes';
import swaggerDocument from '../build/swagger.json';
import { PrismaClient } from '../prisma/client';

export const app = express();
export const prisma = new PrismaClient();

// Use body parser to read sent json payloads
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// CORS
app.use(cors());

// Token
app.use(bearerToken());

// tsoa routes
RegisterRoutes(app);

// Swagger UI
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Error Handlers
app.use(function (err: unknown, req: Request, res: Response, next: NextFunction): Response | void {
  if (err instanceof ValidateError) {
    console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
    return res.status(422).json({
      message: 'Validation Failed',
      details: err?.fields,
    });
  }

  next(err);
});
