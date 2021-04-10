"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckForUpdate1618076121634 = void 0;
class CheckForUpdate1618076121634 {
    constructor() {
        this.name = 'CheckForUpdate1618076121634';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "join_user_role" DROP CONSTRAINT "FK_fb250dfbbef6aece9803912c39f"`);
        await queryRunner.query(`ALTER TABLE "join_user_role" DROP CONSTRAINT "FK_4bbd76e00588cfbc70a75944b2d"`);
        await queryRunner.query(`DROP INDEX "IDX_fb250dfbbef6aece9803912c39"`);
        await queryRunner.query(`DROP INDEX "IDX_4bbd76e00588cfbc70a75944b2"`);
        await queryRunner.query(`ALTER TABLE "join_user_role" DROP CONSTRAINT "PK_5f5813ea706ac856b7ebaa84969"`);
        await queryRunner.query(`ALTER TABLE "join_user_role" ADD CONSTRAINT "PK_4bbd76e00588cfbc70a75944b2d" PRIMARY KEY ("roleId")`);
        await queryRunner.query(`ALTER TABLE "join_user_role" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "join_user_role" DROP CONSTRAINT "PK_4bbd76e00588cfbc70a75944b2d"`);
        await queryRunner.query(`ALTER TABLE "join_user_role" DROP COLUMN "roleId"`);
        await queryRunner.query(`ALTER TABLE "join_user_role" ADD "user_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "join_user_role" ADD CONSTRAINT "PK_9c0ae145d4c0658a77f78ec2199" PRIMARY KEY ("user_id")`);
        await queryRunner.query(`ALTER TABLE "join_user_role" ADD "role_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "join_user_role" DROP CONSTRAINT "PK_9c0ae145d4c0658a77f78ec2199"`);
        await queryRunner.query(`ALTER TABLE "join_user_role" ADD CONSTRAINT "PK_0081b462d35fae0de6580e15222" PRIMARY KEY ("user_id", "role_id")`);
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
        await queryRunner.query(`ALTER TABLE "join_user_role" DROP CONSTRAINT "PK_0081b462d35fae0de6580e15222"`);
        await queryRunner.query(`ALTER TABLE "join_user_role" ADD CONSTRAINT "PK_9c0ae145d4c0658a77f78ec2199" PRIMARY KEY ("user_id")`);
        await queryRunner.query(`ALTER TABLE "join_user_role" DROP COLUMN "role_id"`);
        await queryRunner.query(`ALTER TABLE "join_user_role" DROP CONSTRAINT "PK_9c0ae145d4c0658a77f78ec2199"`);
        await queryRunner.query(`ALTER TABLE "join_user_role" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "join_user_role" ADD "roleId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "join_user_role" ADD CONSTRAINT "PK_4bbd76e00588cfbc70a75944b2d" PRIMARY KEY ("roleId")`);
        await queryRunner.query(`ALTER TABLE "join_user_role" ADD "userId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "join_user_role" DROP CONSTRAINT "PK_4bbd76e00588cfbc70a75944b2d"`);
        await queryRunner.query(`ALTER TABLE "join_user_role" ADD CONSTRAINT "PK_5f5813ea706ac856b7ebaa84969" PRIMARY KEY ("userId", "roleId")`);
        await queryRunner.query(`CREATE INDEX "IDX_4bbd76e00588cfbc70a75944b2" ON "join_user_role" ("roleId") `);
        await queryRunner.query(`CREATE INDEX "IDX_fb250dfbbef6aece9803912c39" ON "join_user_role" ("userId") `);
        await queryRunner.query(`ALTER TABLE "join_user_role" ADD CONSTRAINT "FK_4bbd76e00588cfbc70a75944b2d" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "join_user_role" ADD CONSTRAINT "FK_fb250dfbbef6aece9803912c39f" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }
}
exports.CheckForUpdate1618076121634 = CheckForUpdate1618076121634;
//# sourceMappingURL=1618076121634-CheckForUpdate.js.map