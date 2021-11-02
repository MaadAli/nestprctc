import { Store } from "src/store/store.entity";
import { Users } from "src/users/users.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Products extends BaseEntity {


  constructor(
    name: string, 
    sku: string, 
    price: number, 
    storeId: number, 
    userId: number, 
) {

    super()
    this.name = name
    this.sku = sku
    this.price = price
    this.storeId = storeId
    this.userId = userId
  }


    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    sku: string;

    @Column()
    price: number;

    @Column()
    storeId: number;

    @Column()
    userId: number;

    @ManyToOne(type => Store, store => store.products, {eager: true})
    store: Store

    @ManyToOne(type => Users, user => user.products, {eager: true})
    user: Users
}