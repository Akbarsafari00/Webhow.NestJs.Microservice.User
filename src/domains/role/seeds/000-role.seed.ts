import { Seeder } from 'typeorm-seeding';
import { Connection, ObjectType } from 'typeorm';
import { EntityFactory } from 'typeorm-seeding/dist/entity-factory';
import * as bcrypt from 'bcrypt';
import { RoleEntity } from '../entities/role.entity';
import { RoleDataEnum } from '../enum/role-data.enum';

export class RoleSeed implements Seeder {
  async run(
    factory: <Entity, Context>(
      entity: ObjectType<Entity>,
    ) => (context?: Context) => EntityFactory<Entity, Context>,
    connection: Connection,
  ): Promise<void> {
    const salt = await bcrypt.genSalt(10);

    await connection
      .createQueryBuilder()
      .insert()
      .into(RoleEntity)
      .values([
        {
          id: 1,
          role: RoleDataEnum.Admin,
        },
        {
          id: 2,
          role: RoleDataEnum.User,
        },
      ])
      .execute();
  }
}
