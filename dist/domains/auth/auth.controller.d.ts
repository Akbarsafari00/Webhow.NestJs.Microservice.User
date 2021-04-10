import { AuthLoginRequestDto } from './dto/login/AuthLoginRequestDto';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { UserDto } from '../user/dto/user.dto';
export declare class AuthController {
    private readonly service;
    constructor(service: AuthService);
    getProfile(req: any): Promise<UserDto>;
    login(body: AuthLoginRequestDto, res: Response): Promise<any>;
}
