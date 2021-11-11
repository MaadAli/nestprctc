import { Products } from "src/products/products.entity";
import { Store } from "src/store/store.entity";
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users extends BaseEntity {

  constructor(
    username: string, 
    phone: string, 
    password: string,
    storeId: number
) {

    super()
    this.username = username
    this.phone = phone
    this.password = password
    this.storeId = storeId;
  }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    phone: string;

    @Column()
    password: string;

    @Column()
    storeId: number;

    @OneToMany(type => Products, (product) => product.user, {eager: true})
    products: Products[]

    @ManyToOne(type => Store, (store) => store.users, {eager: false})
    store: Store

   
}