import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUser } from 'src/dto/users.dto';
import { Users } from './users.entity';
import { UsersRepository } from './users.respository';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersRepository)
            private usersRepository: UsersRepository){
    
        }
    
        async createUser(createUser: CreateUser):Promise<Users> {
            return this.usersRepository.createUser(createUser);
            
        }
    
        async getUsers(storeId: number) {
            return this.usersRepository.getUsers(storeId);
        }
}
