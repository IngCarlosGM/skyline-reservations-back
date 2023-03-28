import 'dotenv/config'
import express from 'express'
import cors from 'cors';
import { PrismaClient } from '@prisma/client'
import route from './infraestructure/route/location.route';

const prisma = new PrismaClient()

const app = express()
const port = process.env.PORT ?? 8083

async function main(): Promise<void> {
  app.use(cors())
  app.use(express.json())
  app.use(route);

  app.listen(port, () => { console.log(`Listening on port ${port}`) })
}

main()
  .then(async () => {
    await prisma.$connect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });