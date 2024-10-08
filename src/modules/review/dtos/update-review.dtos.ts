import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { UpdateReviewRequest } from '../interfaces';

export class UpdateReviewDto implements Omit<UpdateReviewRequest, 'id'> {
  @ApiProperty({
    type: String,
    example: 'Review update',
    description: 'review update content',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  content: string;
}
