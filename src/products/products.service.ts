import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  private products = [];

  create(createProductDto: CreateProductDto) {
    return this.products.push({
      ...createProductDto,
      id: Date.now().toString(),
    });
  }

  getAll() {
    return this.products;
  }

  getById(id: string) {
    return this.products.find((p) => p.id === id);
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    const index: number = this.products.findIndex((p) => p.id === id);
    return (this.products[index] = { ...updateProductDto, id: id });
  }

  delete(id: string) {
    const index: number = this.products.findIndex((p) => p.id === id);
    return this.products.splice(index, 1);
  }
}
