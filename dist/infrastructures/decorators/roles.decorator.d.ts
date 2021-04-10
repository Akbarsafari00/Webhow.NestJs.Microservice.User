import { RoleDataEnum } from '../../domains/role/enum/role-data.enum';
export declare const ROLES_KEY = "roles";
export declare const Roles: (...roles: RoleDataEnum[]) => import("@nestjs/common").CustomDecorator<string>;
