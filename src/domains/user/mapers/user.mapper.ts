import { UserDto } from '../dto/user.dto';
import { UserEntity } from '../entities/user.entity';

export class UserMapper {
  static mapToDto(entity: UserEntity): UserDto {
    if (!entity) return null;

    return {
      id: entity.id,
      phone: entity.phone,
      username: entity.username,
      first_name: entity.first_name,
      last_name: entity.last_name,
      full_name: entity.full_name,
      email: entity.email,
      roles: entity.roles ? entity.roles.map((i) => i.role) : [],
    };
  }
}
