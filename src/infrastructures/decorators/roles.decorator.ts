
import { SetMetadata } from '@nestjs/common';
import { RoleDataEnum } from '../../domains/role/enum/role-data.enum';


export const ROLES_KEY = 'roles';
export const Roles = (...roles: RoleDataEnum[]) => SetMetadata(ROLES_KEY, roles);
