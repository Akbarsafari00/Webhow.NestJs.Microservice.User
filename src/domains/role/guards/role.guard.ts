import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ROLES_KEY } from '../../../infrastructures/decorators/roles.decorator';
import { Reflector } from '@nestjs/core';
import { RoleDataEnum } from '../enum/role-data.enum';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly roles: RoleDataEnum[]) {}

  canActivate(context: ExecutionContext): boolean {
    if (!this.roles) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();
    if (!user) {
      throw new UnauthorizedException();
    }
    return this.roles.some((role) => user.roles?.includes(role));
  }
}
