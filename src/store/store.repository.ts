import { CreateStore } from "src/dto/store.dto";
import { Products } from "src/products/products.entity";
import { EntityRepository, Repository } from "typeorm";
import { Store } from "./store.entity";

@EntityRepository(Store)
export class StoreRepository extends Repository<Store> {

    async getStores() {
        const foundStores = await Store.find();
        return foundStores;
    }

    async createStore(createStore: CreateStore): Promise<Store> {
        const {name} = createStore;

        const store = new Store(name);
        await store.save();

        return store;
    }

    async getStoreProducts(storeId: number): Promise<any> {
        const query = this.createQueryBuilder('store').innerJoinAndSelect(Products, "products", "store.id = products.storeId");
        console.log("sql", query.getSql());
        // query.leftJoin('store.products', 'product');
        // query.where('store.id = :storeId', {storeId});
        const storeProducts = await query.getMany();

        console.log("res", storeProducts);
    

        return storeProducts;
    }
}