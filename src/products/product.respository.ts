import { CreateProduct } from "src/dto/products.dto";
import { EntityRepository, Repository } from "typeorm";
import { Products } from "./products.entity";

@EntityRepository(Products)
export class ProductRepository extends Repository<Products> {
    
    async createProduct(createProduct: CreateProduct) {
        const {name, sku, price, storeId, userId} = createProduct;

        const product = new Products(name, sku, price, storeId, userId);
        await product.save();
        return product;
    }

    async getAllProducts(storeId: number, userId: number) {
        console.log("userId", userId);
        console.log("storeId", storeId);
        console.log("storeId", typeof(storeId));

        const query = this.createQueryBuilder("products");
        query.where('products.storeId = :storeId', {storeId});
        if(userId) {
         query.andWhere('products.userId = :userId', {userId});
        }
        console.log("sql", query.getSql());
        const products = await query.getMany();
        return products;
    }
}