import { ReviewService } from './review.service';
import { Review } from './models';
import { CreateReviewDto, UpdateReviewDto } from './dtos';
export declare class ReviewController {
    service: ReviewService;
    constructor(service: ReviewService);
    getReviews(): Promise<Review[]>;
    createReview(createReviewPayload: CreateReviewDto): Promise<Review>;
    updateReview(updateReviewPayload: UpdateReviewDto, reviewid: number): Promise<void>;
    deleteReview(reviewId: number): Promise<void>;
}
