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
import { User, UserRoles } from './models';
import { UserService } from './user.service';
import {
  ApiBearerAuth,
  ApiConsumes,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CreateUserDto, UpdateUserImageDto } from './dtos';
import { FileInterceptor } from '@nestjs/platform-express';
import { Protected, Roles } from '@decorators';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private service: UserService) {}

  @ApiBearerAuth()
  @Protected(true)
  @Roles([UserRoles.admin])
  @ApiOperation({ summary: 'Barcha userlarni olish' })
  @Get()
  async getAllUsers(): Promise<User[]> {
    return await this.service.getAllUsers();
  }

  @ApiBearerAuth()
  @Protected(true)
  @Roles([UserRoles.admin])
  @ApiOperation({ summary: 'Yangi user yaratish' })
  @ApiConsumes('multipart/form-data')
  @Post('/add')
  @UseInterceptors(FileInterceptor('image'))
  async createUser(
    @Body() payload: CreateUserDto,
    @UploadedFile() image: Express.Multer.File,
  ): Promise<void> {
    await this.service.createUser({ ...payload, image });
  }

  @ApiBearerAuth()
  @Protected(true)
  @Roles([UserRoles.admin, UserRoles.user])
  @ApiOperation({ summary: "User rasmini qo'shish va/yoki yangilash" })
  @ApiConsumes('multipart/form-data')
  @Post('/add/image')
  @UseInterceptors(FileInterceptor('image'))
  async uploadUserImage(
    @Body() payload: UpdateUserImageDto,
    @UploadedFile() image: Express.Multer.File,
  ): Promise<void> {
    await this.service.uploadUserImage({ ...payload, image });
  }

  @ApiBearerAuth()
  @Protected(true)
  @Roles([UserRoles.admin])
  @Delete('/delete/:userId')
  @ApiOperation({ summary: "Userni o'chirish" })
  async deleteUser(
    @Param('userId', ParseIntPipe) userId: number,
  ): Promise<void> {
    await this.service.deleteUser(userId);
  }
}
