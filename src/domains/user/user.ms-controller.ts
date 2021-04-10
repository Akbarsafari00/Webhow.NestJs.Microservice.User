import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';

@Controller()
export class UserMsController {
  constructor(private readonly service: UserService) {}

  @MessagePattern({ controller: 'user', action: 'findById' })
  findById(id: number): Promise<UserEntity> {
    return this.service.findById(id);
  }

  @MessagePattern({ controller: 'user', action: 'findByUsername' })
  findByUsername(username: string): Promise<UserEntity> {
    return this.service.findByUsername(username);
  }
}
