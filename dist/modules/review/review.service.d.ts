import { Review } from './models';
import { CreateReviewRequest, UpdateReviewRequest } from './interfaces';
export declare class ReviewService {
    private reviewModel;
    constructor(reviewModel: typeof Review);
    getAllReviews(): Promise<Review[]>;
    createReview(payload: CreateReviewRequest): Promise<Review>;
    updateReview(payload: UpdateReviewRequest): Promise<void>;
    deleteReview(id: number): Promise<void>;
}
