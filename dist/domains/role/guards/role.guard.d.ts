import { CanActivate, ExecutionContext } from '@nestjs/common';
import { RoleDataEnum } from '../enum/role-data.enum';
export declare class RoleGuard implements CanActivate {
    private readonly roles;
    constructor(roles: RoleDataEnum[]);
    canActivate(context: ExecutionContext): boolean;
}
