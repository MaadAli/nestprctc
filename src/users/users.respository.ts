import { CreateUser } from "src/dto/users.dto";
import { EntityRepository, Repository } from "typeorm";
import { Users } from "./users.entity";

@EntityRepository(Users)
export class UsersRepository extends Repository<Users> {
    async createUser(createUser: CreateUser) {
        const {username, phone, password, storeId} = createUser;

        const user = new Users(username, phone, password, storeId);
        await user.save();
        return user;
    }

    async getUsers(storeId: number) {
        const query = this.createQueryBuilder('users');
        query.where('users.storeId = :storeId', {storeId})
        console.log("query", query.getSql());
        const users = await query.getMany();
        return users;
    }
}