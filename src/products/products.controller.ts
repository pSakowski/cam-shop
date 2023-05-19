import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDTO } from './dtos/create-product.dto';
import { UpdateProductDTO } from './dtos/update-product.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('/')
  async getAll() {
    return this.productsService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id', new ParseUUIDPipe()) id: string) {
    const prod = await this.productsService.getById(id);
    if (!prod) throw new NotFoundException('Product not found');
    return prod;
  }

  @Delete('/:id')
  @UseGuards(JwtAuthGuard)
  async deleteById(@Param('id', new ParseUUIDPipe()) id: string) {
    const product = await this.productsService.getById(id);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    await this.productsService.deleteById(id);
    return { message: `Product with id ${id} has been deleted` };
  }

  @Post('/')
  @UseGuards(JwtAuthGuard)
  async create(@Body() productData: CreateProductDTO) {
    const newProduct = await this.productsService.create(productData);
    return {
      message: 'Product created successfully',
      data: newProduct,
    };
  }

  @Put('/:id')
  @UseGuards(JwtAuthGuard)
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() productData: UpdateProductDTO,
  ) {
    if (!(await this.productsService.getById(id)))
      throw new NotFoundException('Product not found');

    await this.productsService.updateById(id, productData);
    return { message: `Product with id ${id} has been updated` };
  }
}
