import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Put,
  Body,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  // #task #findOut decorators usage
  @Get()
  getAll(): string {
    return 'getAll';
  }

  @Get(':id')
  getOne(@Param('id') id: string): string {
    return 'getOne ' + id;
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return `Title: ${createProductDto.title}, Price: ${createProductDto.price}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return 'Remove ' + id;
  }

  @Put(':id')
  update(
    @Body() updateProductDto: UpdateProductDto,
    @Param('id') id: string,
  ): string {
    return `UPDATED Title: ${updateProductDto.title}, Price: ${updateProductDto.price}, of Product having ID ${id}`;
  }
}
