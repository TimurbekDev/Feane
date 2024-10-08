import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ReviewService } from './review.service';
import { Review } from './models';
import { CreateReviewDto, UpdateReviewDto } from './dtos';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Protected, Roles } from '@decorators';
import { UserRoles } from '../user';

@ApiTags('Reviews')
@Controller('reviews')
export class ReviewController {
  service: ReviewService;

  constructor(service: ReviewService) {
    this.service = service;
  }

  @ApiBearerAuth()
  @Protected(false)
  @Roles([UserRoles.admin, UserRoles.user])
  @ApiOperation({
    description: 'Barcha reviewlarni olish',
    summary: 'Barcha reviewlarni olish',
  })
  @Get()
  async getReviews(): Promise<Review[]> {
    return await this.service.getAllReviews();
  }
  @ApiBearerAuth()
  @Protected(true)
  @Roles([UserRoles.admin, UserRoles.user])
  @ApiOperation({ summary: 'Yangi review yaratish' })
  @Post('/add')
  async createReview(
    @Body() createReviewPayload: CreateReviewDto,
  ): Promise<Review> {
    return await this.service.createReview(createReviewPayload);
  }

  @ApiBearerAuth()
  @Protected(true)
  @Roles([UserRoles.admin])
  @ApiOperation({ summary: 'Reviewlarni yangilash' })
  @Put('/edit/:reviewid')
  async updateReview(
    @Body() updateReviewPayload: UpdateReviewDto,
    @Param('reviewid', ParseIntPipe) reviewid: number,
  ): Promise<void> {
    await this.service.updateReview({
      ...updateReviewPayload,
      id: reviewid,
    });
  }

  @ApiBearerAuth()
  @Protected(true)
  @Roles([UserRoles.admin])
  @ApiOperation({ summary: "Reviewni o'chirish" })
  @Delete('/delete/:reviewId')
  async deleteReview(
    @Param('reviewId', ParseIntPipe) reviewId: number,
  ): Promise<void> {
    await this.service.deleteReview(reviewId);
  }
}
