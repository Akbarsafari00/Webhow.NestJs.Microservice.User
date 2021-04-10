import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CheckDatabaseUpdate1618004353262 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
