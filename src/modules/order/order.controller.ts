import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { OrderService } from './order.service';
import { Order } from './models';
import { CreateOrderDto } from './dtos';
import { Protected, Roles } from '@decorators';
import { UserRoles } from '../user';

@ApiTags('Orders')
@Controller('orders')
export class OrderController {
  #_service: OrderService;

  constructor(service: OrderService) {
    this.#_service = service;
  }

  @ApiBearerAuth()
  @Protected(true)
  @Roles([UserRoles.admin])
  @ApiOperation({
    description: 'Barcha orderlarni olish',
    summary: 'Barcha orderlarni olish',
  })
  @Get()
  async getOrders(): Promise<Order[]> {
    return await this.#_service.getAllOrders();
  }

  @ApiBearerAuth()
  @Protected(true)
  @Roles([UserRoles.admin, UserRoles.user])
  @ApiOperation({ summary: 'Yangi order yaratish' })
  @Post('/add')
  async createOrder(@Body() createOrderPayload: CreateOrderDto): Promise<void> {
    await this.#_service.createOrder(createOrderPayload);
  }

  @ApiBearerAuth()
  @Protected(true)
  @Roles([UserRoles.admin])
  @ApiOperation({ summary: "Orderni o'chirish" })
  @Delete('/delete/:orderId')
  async deleteOrder(
    @Param('orderId', ParseIntPipe) orderId: number,
  ): Promise<void> {
    await this.#_service.deleteOrder(orderId);
  }
}
