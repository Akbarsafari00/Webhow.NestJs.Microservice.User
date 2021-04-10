import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '../user/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { UserMapper } from '../user/mapers/user.mapper';
import { UserDto } from '../user/dto/user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<boolean> {
    const user = await this.userService.findByUsername(username);
    return user && bcrypt.compareSync(pass, user.password);
  }

  async profileByUsername(username: string): Promise<UserDto> {
    const res = await this.userService.findByUsername(username);
    return UserMapper.mapToDto(res);
  }

  async login(username: string, pass: string) {
    const user = await this.userService.findByUsername(username);

    if (!user)
      throw new NotFoundException('cannot found user with this username');

    const validateResult = await this.validateUser(user.username, pass);

    if (validateResult === false)
      throw new UnauthorizedException('username or password incorrect');

    const payload = {
      username: user.username,
      sub: user.id,
      roles: user.roles.map((i) => i.role),
    };

    return {
      access_token: this.jwtService.sign(payload),
      user: UserMapper.mapToDto(user),
    };
  }
}
