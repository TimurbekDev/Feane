import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Food } from './models';
import { CreateFoodRequest } from './interfaces';
import { UploadService } from '../upload';

@Injectable()
export class FoodService {
  #_uploadService: UploadService;
  constructor(
    @InjectModel(Food) private foodModel: typeof Food,
    upload: UploadService,
  ) {
    this.#_uploadService = upload;
  }

  async getAllFoods(): Promise<Food[]> {
    return await this.foodModel.findAll();
  }

  async getAllFoodsByCategory(categoryId: number): Promise<Food[]> {
    return await this.foodModel.findAll({ where: { category_id: categoryId } });
  }

  async createFood(payload: CreateFoodRequest): Promise<void> {
    const fileOptions = await this.#_uploadService.uploadFile({
      file: payload.image,
      destination: 'uploads/foods',
    });

    await this.foodModel.create({
      name: payload.name,
      description: payload.description,
      price: payload.price,
      image: fileOptions.imageUrl,
      category_id: payload.categoryId,
    });
  }

  async deleteFood(id: number): Promise<void> {
    const foundedFood = await this.foodModel.findByPk(id);

    await this.#_uploadService.removeFile({ fileName: foundedFood.image });

    await this.foodModel.destroy({ where: { id } });
  }
}
