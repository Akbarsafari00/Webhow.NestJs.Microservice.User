import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
export declare class UserMsController {
    private readonly service;
    constructor(service: UserService);
    findById(id: number): Promise<UserEntity>;
    findByUsername(username: string): Promise<UserEntity>;
}
