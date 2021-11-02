import { Body, Controller, Get, Param, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateProduct } from 'src/dto/products.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {

    }


    @Post()
    @UsePipes(ValidationPipe)
    createProduct(@Body() createProduct: CreateProduct) {
        return this.productsService.createProduct(createProduct);
    }

    @Get('/:storeId')
    getProducts(@Param('storeId') storeId: number, @Query('userId') userId: number) {
        return this.productsService.getProducts(storeId, userId);
    } 
}
