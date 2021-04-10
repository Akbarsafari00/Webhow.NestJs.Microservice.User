"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserAndRole1618002858144 = void 0;
class CreateUserAndRole1618002858144 {
    constructor() {
        this.name = 'CreateUserAndRole1618002858144';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "email" character varying NOT NULL, "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "full_name" character varying NOT NULL, "password" character varying NOT NULL, "phone" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "role" ("id" SERIAL NOT NULL, "role" character varying NOT NULL, CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "join_user_role" ("user_id" integer NOT NULL, "role_id" integer NOT NULL, CONSTRAINT "PK_0081b462d35fae0de6580e15222" PRIMARY KEY ("user_id", "role_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_9c0ae145d4c0658a77f78ec219" ON "join_user_role" ("user_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_0216b1154bbcc521756bd3fb81" ON "join_user_role" ("role_id") `);
        await queryRunner.query(`ALTER TABLE "join_user_role" ADD CONSTRAINT "FK_9c0ae145d4c0658a77f78ec2199" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "join_user_role" ADD CONSTRAINT "FK_0216b1154bbcc521756bd3fb813" FOREIGN KEY ("role_id") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "join_user_role" DROP CONSTRAINT "FK_0216b1154bbcc521756bd3fb813"`);
        await queryRunner.query(`ALTER TABLE "join_user_role" DROP CONSTRAINT "FK_9c0ae145d4c0658a77f78ec2199"`);
        await queryRunner.query(`DROP INDEX "IDX_0216b1154bbcc521756bd3fb81"`);
        await queryRunner.query(`DROP INDEX "IDX_9c0ae145d4c0658a77f78ec219"`);
        await queryRunner.query(`DROP TABLE "join_user_role"`);
        await queryRunner.query(`DROP TABLE "role"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }
}
exports.CreateUserAndRole1618002858144 = CreateUserAndRole1618002858144;
//# sourceMappingURL=1618002858144-CreateUserAndRole.js.map