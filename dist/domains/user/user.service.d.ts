import { UserRepository } from './repositories/UserRepository';
import { UserEntity } from './entities/user.entity';
export declare class UserService {
    private readonly _userRepo;
    constructor(_userRepo: UserRepository);
    findByUsername(username: string): Promise<UserEntity>;
    findById(id: number): Promise<UserEntity>;
}
