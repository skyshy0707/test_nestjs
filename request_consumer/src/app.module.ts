import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { RequestController } from './app.controller';
import { RequestService } from './app.service';
import { RequestConsumer } from './app.processor';
import { MyLogger } from  './app.logger'

const environment = process.env
const {
  REDIS_HOST,
  REDIS_PORT
} = environment

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: REDIS_HOST,
        port: parseInt(REDIS_PORT)
      }
    }),
    BullModule.registerQueue({
      name: 'request'
    })
  ],
  controllers: [RequestController],
  providers: [
    RequestService,
    RequestConsumer,
    MyLogger
  ],
  exports: [
    RequestService,
    RequestConsumer,
    MyLogger
  ]
})
export class AppModule {}
