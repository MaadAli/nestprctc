import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUser } from 'src/dto/users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {

    }
    
    @Post()
    @UsePipes(ValidationPipe)
    createUser(@Body() createUser: CreateUser) {
        return this.usersService.createUser(createUser);
    }

    @Get('/:storeId')
    getStores(@Param('storeId') storeId: number, @Param('storeId2') storeId2: number) {
        return this.usersService.getUsers(storeId);
    } 
}
