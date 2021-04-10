"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSeed = void 0;
const user_entity_1 = require("../entities/user.entity");
const bcrypt = require("bcrypt");
const role_entity_1 = require("../../role/entities/role.entity");
const role_data_enum_1 = require("../../role/enum/role-data.enum");
class UserSeed {
    async run(factory, connection) {
        const salt = await bcrypt.genSalt(10);
        const roleAdmin = await connection.manager.findOne(role_entity_1.RoleEntity, {
            where: { role: role_data_enum_1.RoleDataEnum.Admin },
        });
        await connection
            .createQueryBuilder()
            .insert()
            .into(user_entity_1.UserEntity)
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
exports.UserSeed = UserSeed;
//# sourceMappingURL=001-user.seed.js.map