import { EntityRepository, Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {}
