import { Seeder } from 'typeorm-seeding';
import { Connection, ObjectType } from 'typeorm';
import { EntityFactory } from 'typeorm-seeding/dist/entity-factory';
import { UserEntity } from '../entities/user.entity';
import * as bcrypt from 'bcrypt';
import { RoleEntity } from '../../role/entities/role.entity';
import { RoleDataEnum } from '../../role/enum/role-data.enum';

export class UserSeed implements Seeder {
  async run(
    factory: <Entity, Context>(
      entity: ObjectType<Entity>,
    ) => (context?: Context) => EntityFactory<Entity, Context>,
    connection: Connection,
  ): Promise<void> {
    const salt = await bcrypt.genSalt(10);

    const roleAdmin = await connection.manager.findOne(RoleEntity, {
      where: { role: RoleDataEnum.Admin },
    });

    await connection
      .createQueryBuilder()
      .insert()
      .into(UserEntity)
      .values([
        {
          id: 1,
          email: 'akbarsafari00',
          first_name: 'akbar',
          last_name: 'ahmadi',
          full_name: 'akbar ahmadi saray',
          phone: '09371770774',
          username: 'akbarsafari00',
          password: await bcrypt.hash('Aa@13567975', salt),
          roles: [roleAdmin],
        },
      ])
      .execute();
  }
}
