import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Food } from './models';
import { FoodService } from './food.service';
import { CreateFoodDto } from './dtos';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiBearerAuth,
  ApiConsumes,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Protected, Roles } from '@decorators';
import { UserRoles } from '../user';

@ApiTags('Foods')
@Controller('foods')
export class FoodController {
  #_service: FoodService;

  constructor(service: FoodService) {
    this.#_service = service;
  }

  @Protected(false)
  @Roles([UserRoles.admin, UserRoles.user])
  @ApiOperation({ summary: 'Barcha foodlarni olish' })
  @Get()
  async getAllFoods(): Promise<Food[]> {
    return await this.#_service.getAllFoods();
  }

  @Protected(false)
  @Roles([UserRoles.admin, UserRoles.user])
  @ApiOperation({ summary: "Barcha foodlarni category bo'yicha olish" })
  @Get('/:categoryId')
  async getAllFoodsByCategory(
    @Param('categoryId', ParseIntPipe) categoryId: number,
  ): Promise<Food[]> {
    return await this.#_service.getAllFoodsByCategory(categoryId);
  }
  @ApiBearerAuth()
  @Protected(true)
  @Roles([UserRoles.admin])
  @ApiOperation({ summary: 'Yangi food yaratish' })
  @ApiConsumes('multipart/form-data')
  @Post('/add')
  @UseInterceptors(FileInterceptor('image'))
  async createFood(
    @Body() createFoodPayload: CreateFoodDto,
    @UploadedFile() image: Express.Multer.File,
  ): Promise<void> {
    await this.#_service.createFood({
      ...createFoodPayload,
      image: image,
    });
  }

  @ApiBearerAuth()
  @Protected(true)
  @Roles([UserRoles.admin])
  @ApiOperation({ summary: "Foodni o'chirish" })
  @Delete('/delete/:foodId')
  async deleteFood(
    @Param('foodId', ParseIntPipe) foodId: number,
  ): Promise<void> {
    await this.#_service.deleteFood(foodId);
  }
}
