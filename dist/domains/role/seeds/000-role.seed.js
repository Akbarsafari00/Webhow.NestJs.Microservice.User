"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleSeed = void 0;
const bcrypt = require("bcrypt");
const role_entity_1 = require("../entities/role.entity");
const role_data_enum_1 = require("../enum/role-data.enum");
class RoleSeed {
    async run(factory, connection) {
        const salt = await bcrypt.genSalt(10);
        await connection
            .createQueryBuilder()
            .insert()
            .into(role_entity_1.RoleEntity)
            .values([
            {
                id: 1,
                role: role_data_enum_1.RoleDataEnum.Admin,
            },
            {
                id: 2,
                role: role_data_enum_1.RoleDataEnum.User,
            },
        ])
            .execute();
    }
}
exports.RoleSeed = RoleSeed;
//# sourceMappingURL=000-role.seed.js.map