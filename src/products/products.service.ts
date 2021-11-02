import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProduct } from 'src/dto/products.dto';
import { ProductRepository } from './product.respository';
import { Products } from './products.entity';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(ProductRepository)
            private productRepository: ProductRepository){
    
        }
    
        async createProduct(createProduct: CreateProduct):Promise<Products> {
            return this.productRepository.createProduct(createProduct);
            
        }
    
        async getProducts(storeId: number, userId: number) {
            return this.productRepository.getAllProducts(storeId, userId);
        }
}
