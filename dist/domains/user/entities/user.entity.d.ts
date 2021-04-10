import { BaseEntity } from 'typeorm';
import { RoleEntity } from '../../role/entities/role.entity';
export declare class UserEntity extends BaseEntity {
    id: number;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    full_name: string;
    password: string;
    phone: string;
    roles: RoleEntity[];
}
