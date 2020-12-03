import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Put,
  Body,
  // Redirect,
  HttpCode,
  HttpStatus,
  Header,
  // Req,
  // Res,
} from '@nestjs/common';
// import { Request, Response } from 'express';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // #task #findOut decorators usage
  @Get()
  getAll() {
    return this.productsService.getAll();
  }

  // #note !res?opt
  // @Get()
  // getAll(@Req() req: Request, @Res() res: Response): string {
  //   res.status(200).send({ status: 'Ok' });
  //   return 'getAll';
  // }

  @Get(':id')
  // @Redirect('https://www.google.com', 302)
  getOne(@Param('id') id: string) {
    return this.productsService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.delete(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }
}
