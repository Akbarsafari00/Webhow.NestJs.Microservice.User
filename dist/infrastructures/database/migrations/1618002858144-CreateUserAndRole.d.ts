import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateUserAndRole1618002858144 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
