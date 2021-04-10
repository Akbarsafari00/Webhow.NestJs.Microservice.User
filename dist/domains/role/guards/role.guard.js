"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleGuard = void 0;
const common_1 = require("@nestjs/common");
let RoleGuard = class RoleGuard {
    constructor(roles) {
        this.roles = roles;
    }
    canActivate(context) {
        if (!this.roles) {
            return true;
        }
        const { user } = context.switchToHttp().getRequest();
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        return this.roles.some((role) => { var _a; return (_a = user.roles) === null || _a === void 0 ? void 0 : _a.includes(role); });
    }
};
RoleGuard = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [Array])
], RoleGuard);
exports.RoleGuard = RoleGuard;
//# sourceMappingURL=role.guard.js.map