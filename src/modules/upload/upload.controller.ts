import {
  Body,
  Controller,
  Delete,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { RemoveFileResponse, UploadFileResponse } from './interfaces';
import { UploadService } from './upload.service';
import { UploadFileDto } from './dtos/upload-file.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { RemoveFileDto } from './dtos';
import {
  ApiBearerAuth,
  ApiConsumes,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Protected, Roles } from '@decorators';
import { UserRoles } from '../user';

@ApiTags('Upload')
@Controller('uploads')
export class UploadController {
  constructor(private service: UploadService) {}

  @ApiBearerAuth()
  @Protected(true)
  @Roles([UserRoles.admin])
  @ApiOperation({ summary: 'Yangi file yaratish' })
  @ApiConsumes('multipart/form-data')
  @Post('/add')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @Body() payload: UploadFileDto,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<UploadFileResponse> {
    return await this.service.uploadFile({ ...payload, file });
  }
  @ApiBearerAuth()
  @Protected(true)
  @Roles([UserRoles.admin])
  @ApiOperation({ summary: "mavjud faylni o'chirish" })
  @Delete('/remove')
  async removeFile(
    @Body() payload: RemoveFileDto,
  ): Promise<RemoveFileResponse> {
    return this.service.removeFile(payload);
  }
}
