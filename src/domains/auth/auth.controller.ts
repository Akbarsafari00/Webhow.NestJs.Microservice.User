import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { RoleDataEnum } from '../role/enum/role-data.enum';
import { AuthLoginRequestDto } from './dto/login/AuthLoginRequestDto';
import { AuthLoginResponseDto } from './dto/login/AuthLoginResponseDto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { RoleGuard } from '../role/guards/role.guard';
import { Response } from 'express';
import { UserDto } from '../user/dto/user.dto';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Get('profile')
  @UseGuards(JwtAuthGuard, new RoleGuard([RoleDataEnum.Admin]))
  async getProfile(@Req() req): Promise<UserDto> {
    return this.service.profileByUsername(req.user.username);
  }

  @Post('login')
  async login(
    @Body() body: AuthLoginRequestDto,
    @Res() res: Response,
  ): Promise<any> {
    const result = await this.service.login(body.username, body.password);
    res.setHeader('Token', result.access_token);
    res.json(new AuthLoginResponseDto(result.user));
  }
}
