import { InferSubjects } from '@casl/ability/dist/types/types';
import { UserEntity } from '../../user/entities/user.entity';
import { Ability } from '@casl/ability';
import { PermissionActionEnum } from '../enum/PermissionActionEnum';
declare type Subjects = InferSubjects<typeof UserEntity> | 'all';
export declare type AppAbility = Ability<[PermissionActionEnum, Subjects]>;
export declare class CaslAbilityFactory {
    createForUser(user: UserEntity): Ability<[PermissionActionEnum, Subjects], import("@casl/ability").MongoQuery<import("@casl/ability/dist/types/types").AnyObject>>;
}
export {};
