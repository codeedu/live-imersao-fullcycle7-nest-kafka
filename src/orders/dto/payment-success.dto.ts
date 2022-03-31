import { Type } from 'class-transformer';
import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsPositive,
  IsString,
} from 'class-validator';

export class PaymentSuccessDto {
  @IsPositive()
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsString()
  @IsNotEmpty()
  customer_id: string; //UUID

  @IsDateString()
  payment_date: string;
}

export class KafkaMessagePaymentSuccess {
  @IsObject()
  @Type(() => PaymentSuccessDto)
  value: PaymentSuccessDto;
}
