import { Test, TestingModule } from '@nestjs/testing';
import { RequestController } from './app.controller';
import { RequestConsumer } from './app.processor';
import { RequestScheme } from './app.schemes';

describe('RequestController', () => {
  let requestController: RequestController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RequestController],
      providers: [RequestConsumer],
    }).compile();

    requestController = app.get<RequestController>(RequestController);
  });

  let testData = new RequestScheme()
  testData.answer = 'Hi!'
  testData.wait = 5

  describe('root', () => {
    it('should return json data', () => {
      expect(requestController.getHello(testData)).toBe({ answer: 'Hi!' });
    });
  });
});
