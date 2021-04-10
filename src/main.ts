import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RMQ_HOST],
      queue: process.env.RMQ_QUEUE,
      queueOptions: {
        durable: Boolean(process.env.RMQ_DURABLE)
      },
    },
  });
  await app.listen(Number(process.env.SERVER_PORT));
}
bootstrap();
