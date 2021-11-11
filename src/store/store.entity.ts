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

    @OneToMany(type => Users, (user) => user.store, {eager: true})
    users: Users[]

    @OneToMany(type => Products, (product) => product.store, {eager: true})
    products: Products[]
}