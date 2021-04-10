import { UserDto } from '../dto/user.dto';
import { UserEntity } from '../entities/user.entity';
export declare class UserMapper {
    static mapToDto(entity: UserEntity): UserDto;
}
