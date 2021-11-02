import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateProduct {
    @IsNotEmpty()
    sku: string;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    price: number;

    @IsNotEmpty()
    @IsNumber()
    storeId: number;

    @IsNotEmpty()
    @IsNumber()
    userId: number;
}