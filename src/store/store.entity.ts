import { Products } from "src/products/products.entity";
import { Users } from "src/users/users.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Store extends BaseEntity {


  constructor(name: string) {
    super()
    this.name = name
  }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => Store, store => store.users, {eager: false})
    users: Users[]

    @OneToMany(type => Store, store => store.products, {eager: false})
    products: Products[]
}