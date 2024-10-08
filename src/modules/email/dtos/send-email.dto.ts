import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ISendEmailRequest } from '../interfaces';
import { ApiProperty } from '@nestjs/swagger';

export class SendEmailDto implements ISendEmailRequest {
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  to: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  message: string;
}
