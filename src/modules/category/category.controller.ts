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
import { CategoryService } from './category.service';
import { Category } from './models';
import { CreateCategoryDto, UpdateCategoryDto } from './dtos';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Protected, Roles } from '@decorators';
import { UserRoles } from '../user';

@ApiTags('Category')
@Controller('categories')
export class CategoryController {
  service: CategoryService;

  constructor(service: CategoryService) {
    this.service = service;
  }

  @Protected(false)
  @Roles([UserRoles.user, UserRoles.admin])
  @ApiOperation({
    description: 'Barcha categoriesni olish',
    summary: 'Barcha categoriyalarni olish',
  })
  @Get()
  async getCategories(): Promise<Category[]> {
    return await this.service.getAllCategories();
  }
  @ApiBearerAuth()
  @Protected(true)
  @Roles([UserRoles.admin])
  @ApiOperation({ summary: 'Yangi category yaratish' })
  @Post('/add')
  async createCategory(
    @Body() createCategoryPayload: CreateCategoryDto,
  ): Promise<Category> {
    return await this.service.createCategory(createCategoryPayload);
  }

  @ApiBearerAuth()
  @Protected(true)
  @Roles([UserRoles.admin])
  @ApiOperation({ summary: 'Categoryni update qilish' })
  @Put('/edit/:categoryId')
  async updateCategory(
    @Body() updateCategoryPayload: UpdateCategoryDto,
    @Param('categoryId', ParseIntPipe) categoryId: number,
  ): Promise<void> {
    await this.service.updateCategory({
      ...updateCategoryPayload,
      id: categoryId,
    });
  }

  @ApiBearerAuth()
  @Protected(true)
  @Roles([UserRoles.admin])
  @ApiOperation({ summary: "Categoryni o'chirish" })
  @Delete('/delete/:categoryId')
  async deleteCategory(
    @Param('categoryId', ParseIntPipe) categoryId: number,
  ): Promise<void> {
    await this.service.deleteCategory(categoryId);
  }
}
