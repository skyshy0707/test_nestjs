import { NestFactory } from '@nestjs/core';
import { MyLogger } from './app.logger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true
  });
  app.setGlobalPrefix('api/v1');
  app.useLogger(app.get(MyLogger));
  await app.listen(3000);
}
bootstrap();
