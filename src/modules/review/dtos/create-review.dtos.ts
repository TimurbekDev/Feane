import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { CreateReviewRequest } from '../interfaces';
import { ApiProperty } from '@nestjs/swagger';

export class CreateReviewDto implements CreateReviewRequest {
  @ApiProperty({
    type: String,
    example: 'Burgers',
    description: 'Category nomi berilishi shart',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty({
    type: Number,
    example: 1,
    description: 'User id berilishi shart',
    required: true,
  })
  @IsInt()
  @IsNotEmpty()
  userId: number;
}
