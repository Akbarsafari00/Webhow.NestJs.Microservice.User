import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from '../user/dto/user.dto';
export declare class AuthService {
    private readonly userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(username: string, pass: string): Promise<boolean>;
    profileByUsername(username: string): Promise<UserDto>;
    login(username: string, pass: string): Promise<{
        access_token: string;
        user: UserDto;
    }>;
}
