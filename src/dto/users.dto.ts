import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateUser {
    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    phone: string;

    @IsNotEmpty()
    @IsNumber()
    storeId: number
}