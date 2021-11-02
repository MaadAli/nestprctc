import { IsNotEmpty } from "class-validator";

export class CreateStore {
    @IsNotEmpty()
    name: string;
}