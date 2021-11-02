import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'rxjs';
import { typeOrmConfig } from './config/typeorm.config';
import { ProductsModule } from './products/products.module';
import { StoreModule } from './store/store.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ProductsModule, 
    StoreModule, 
    UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
