import { Job } from 'bull';
import { 
  Processor, 
  Process, 
  OnQueueActive,
  OnQueueCompleted
} from '@nestjs/bull';
import { plainToClass } from 'class-transformer';
import { ResponseScheme } from './app.schemes';

@Processor('request')
export class RequestConsumer {

  @Process('task1')
  async process_request(job: Job){
    let responseData: ResponseScheme
    var timestamp = new Date(job.timestamp).toLocaleTimeString()
    var whenProcessed = new Date(job.processedOn).toLocaleTimeString()

    responseData = plainToClass(ResponseScheme, job.data)
    console.log(
      `Job ${job.name} with id ${job.id} was added 
      to queue ${job.queue.name} in ${timestamp},
      processed on ${whenProcessed}`
    )
    return responseData
  }

  @OnQueueActive()
  onActive(job: Job){
    console.log(`Data with delay: ${job.data.wait} was sended`)
  }

  @OnQueueCompleted()
  onComplete(job: Job){
    var whenFinished = new Date(job.finishedOn).toLocaleTimeString()
    console.log(`Job with id ${job.id} was finished in ${whenFinished}`)
  }
}