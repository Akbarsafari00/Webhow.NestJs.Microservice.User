import { Injectable } from '@nestjs/common';
import { UserRepository } from './repositories/UserRepository';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly _userRepo: UserRepository) {}

  async findByUsername(username: string): Promise<UserEntity> {
    return this._userRepo.findOne({
      where: { username: username },
      relations: ['roles'],
    });
  }

  async findById(id: number): Promise<UserEntity> {
    return this._userRepo.findOne({
      where: { id: id },
      relations: ['roles'],
    });
  }
}
