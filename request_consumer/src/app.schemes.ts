import { IsNotEmpty, Length, Min } from 'class-validator';
import { Exclude, Transform } from 'class-transformer';


export class RequestScheme {

    @IsNotEmpty()
    @Length(3)
    answer: string;

    @Transform( ({ value }) => value * 1000)
    @IsNotEmpty()
    @Min(0)
    wait: number;

}

export class ResponseScheme extends RequestScheme {

    @Exclude()
    wait: number

}