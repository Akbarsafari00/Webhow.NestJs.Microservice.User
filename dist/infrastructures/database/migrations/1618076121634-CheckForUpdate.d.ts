import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CheckForUpdate1618076121634 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
