import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MyLogger } from './app.logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true
  });
  app.useLogger(app.get(MyLogger))
  await app.listen(3000);
}
bootstrap();
