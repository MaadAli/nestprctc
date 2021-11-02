import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateStore } from 'src/dto/store.dto';
import { StoreService } from './store.service';

@Controller('store')
export class StoreController {
    constructor(private storeService: StoreService) {

    }

    @Post()
    @UsePipes(ValidationPipe)
    createStore(@Body() createStore: CreateStore) {
        return this.storeService.createStore(createStore);
    }

    @Get()
    getStores() {
        return this.storeService.getStores();
    } 

    @Get('products/:storeId')
    getStoreProducts(@Param('storeId') storeId: number) {
        return this.storeService.getStoreProducts(storeId);
    } 
}
