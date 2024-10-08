import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Review } from './models';
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';

@Module({
  imports: [SequelizeModule.forFeature([Review])],
  providers: [ReviewService],
  controllers: [ReviewController],
})
export class ReviewModule {}
