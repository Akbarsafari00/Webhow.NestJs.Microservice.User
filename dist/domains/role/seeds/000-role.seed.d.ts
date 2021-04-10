import { Seeder } from 'typeorm-seeding';
import { Connection, ObjectType } from 'typeorm';
import { EntityFactory } from 'typeorm-seeding/dist/entity-factory';
export declare class RoleSeed implements Seeder {
    run(factory: <Entity, Context>(entity: ObjectType<Entity>) => (context?: Context) => EntityFactory<Entity, Context>, connection: Connection): Promise<void>;
}
