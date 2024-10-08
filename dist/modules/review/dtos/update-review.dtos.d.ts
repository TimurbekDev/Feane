import { UpdateReviewRequest } from '../interfaces';
export declare class UpdateReviewDto implements Omit<UpdateReviewRequest, 'id'> {
    content: string;
}
