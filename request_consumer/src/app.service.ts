import { Injectable } from '@nestjs/common';
import { Job, Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';
import { plainToClass } from 'class-transformer';
import { RequestScheme, ResponseScheme } from './app.schemes';


@Injectable()
export class RequestService {
  constructor(
    @InjectQueue('request') private requestQueue: Queue
  ){}

   async sendData(data: RequestScheme): Promise<ResponseScheme> {
    let responseData: ResponseScheme
    data = plainToClass(RequestScheme, data)

    const jobInstance = await this.requestQueue.add(
      'task1', data, { delay: data.wait }
    )

    async function setJobData(jobInstance: Job, queue: Queue): Promise<ResponseScheme>{
      return new Promise((resolve, reject) => {

        queue.on(
          'completed', async function(
            job: Job, 
            result: ResponseScheme, 
            state: string
          ){
            if (jobInstance.id == job.id) {
              //responseData = result
              console.log("result", result)
              await job.remove()
              resolve(result)
            }
            if (state == 'active') {
              console.log(
                `Job named ${jobInstance.name} 
                with id ${jobInstance.id} is still active`
              )
            }
          }
        )
        queue.on(
          'failed', async function(job: Job, error: any){
            console.log(
              `Processing job named 
              ${job.name} with id ${job.id} 
              failed with error`
            )
            reject(error)
          }
        )

      })
    }
    responseData = await setJobData(jobInstance, this.requestQueue)
    return responseData
}}
