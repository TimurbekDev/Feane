import { Food } from './models';
import { CreateFoodRequest } from './interfaces';
import { UploadService } from '../upload';
export declare class FoodService {
    #private;
    private foodModel;
    constructor(foodModel: typeof Food, upload: UploadService);
    getAllFoods(): Promise<Food[]>;
    getAllFoodsByCategory(categoryId: number): Promise<Food[]>;
    createFood(payload: CreateFoodRequest): Promise<void>;
    deleteFood(id: number): Promise<void>;
}
