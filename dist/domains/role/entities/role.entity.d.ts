import { BaseEntity } from 'typeorm';
import { UserEntity } from '../../user/entities/user.entity';
export declare class RoleEntity extends BaseEntity {
    id: number;
    role: string;
    users: UserEntity[];
}
