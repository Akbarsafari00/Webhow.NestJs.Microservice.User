"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMapper = void 0;
class UserMapper {
    static mapToDto(entity) {
        if (!entity)
            return null;
        return {
            id: entity.id,
            phone: entity.phone,
            username: entity.username,
            first_name: entity.first_name,
            last_name: entity.last_name,
            full_name: entity.full_name,
            email: entity.email,
            roles: entity.roles ? entity.roles.map((i) => i.role) : [],
        };
    }
}
exports.UserMapper = UserMapper;
//# sourceMappingURL=user.mapper.js.map