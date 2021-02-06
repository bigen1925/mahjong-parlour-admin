import cors from 'cors';
import express from 'express';
import { RegisterRoutes } from '../build/routes';
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

app.use(cors());

RegisterRoutes(app);
