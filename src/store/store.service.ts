import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStore } from 'src/dto/store.dto';
import { Store } from './store.entity';
import { StoreRepository } from './store.repository';

@Injectable()
export class StoreService {
    constructor(
    @InjectRepository(StoreRepository)
        private storeRepository: StoreRepository){

    }

    async createStore(createStore: CreateStore):Promise<Store> {
        return this.storeRepository.createStore(createStore);
        
    }

    async getStores() {
        return this.storeRepository.getStores();
    }

    async getStoreProducts(storeId: number) {
        return this.storeRepository.getStoreProducts(storeId);
    }
}
