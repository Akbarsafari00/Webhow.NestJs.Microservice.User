import { ExtractSubjectType, InferSubjects } from '@casl/ability/dist/types/types';
import { UserEntity } from '../../user/entities/user.entity';
import { Ability, AbilityBuilder, AbilityClass } from '@casl/ability';
import { PermissionActionEnum } from '../enum/PermissionActionEnum';
import { Injectable } from '@nestjs/common';
import { RoleDataEnum } from '../../role/enum/role-data.enum';

type Subjects = InferSubjects<typeof UserEntity> | 'all';

export type AppAbility = Ability<[PermissionActionEnum, Subjects]>;

@Injectable()
export class CaslAbilityFactory {
  createForUser(user: UserEntity) {
    const { can, cannot, build } = new AbilityBuilder<
      Ability<[PermissionActionEnum, Subjects]>
    >(Ability as AbilityClass<AppAbility>);

    if (user.roles.map((i) => i.role).includes(RoleDataEnum.Admin)) {
      can(PermissionActionEnum.Manage, 'all'); // read-write access to everything
    } else {
      can(PermissionActionEnum.Read, 'all'); // read-only access to everything
    }
    return build({
      // Read https://casl.js.org/v5/en/guide/subject-type-detection#use-classes-as-subject-types for details
      detectSubjectType: (item) =>
        item.constructor as ExtractSubjectType<Subjects>,
    });
  }
}
