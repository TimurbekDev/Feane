import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Review } from './models';
import { CreateReviewRequest, UpdateReviewRequest } from './interfaces';
import { User } from '../user';

@Injectable()
export class ReviewService {
  constructor(@InjectModel(Review) private reviewModel: typeof Review) {}

  async getAllReviews(): Promise<Review[]> {
    return await this.reviewModel.findAll({ include: User });
  }

  async createReview(payload: CreateReviewRequest): Promise<Review> {
    const review = await this.reviewModel.create({
      content: payload.content,
      user_id: payload.userId,
    });
    return review;
  }

  async updateReview(payload: UpdateReviewRequest): Promise<void> {
    await this.reviewModel.update(
      { content: payload.content },
      { where: { id: payload.id } },
    );
  }

  async deleteReview(id: number): Promise<void> {
    await this.reviewModel.destroy({
      where: {
        id,
      },
    });
  }
}
