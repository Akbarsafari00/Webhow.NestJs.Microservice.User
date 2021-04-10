import { UserDto } from '../../../user/dto/user.dto';

export class AuthLoginResponseDto {
  private user: UserDto;

  constructor(user: UserDto) {
    this.user = user;
  }
}
