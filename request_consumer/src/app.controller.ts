import { Body, Controller, Get, Post } from '@nestjs/common';
import { RequestService } from './app.service';
import { RequestScheme, ResponseScheme } from './app.schemes';

@Controller('request')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @Get()
  about(): string{
    return "Hello! This is the request"
  }

  @Post()
  async getHello(@Body() data: RequestScheme): Promise<ResponseScheme> {
    console.log("POST", "data", data)
    let responseData: ResponseScheme
    responseData = await this.requestService.sendData(data)
    return responseData
  }
}
