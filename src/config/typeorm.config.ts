import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Store } from "src/store/store.entity";
import { Products } from "src/products/products.entity";
import { Users } from "src/users/users.entity";



export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'nestprctc',
    entities: [Store, Products, Users],
    synchronize: true,

}