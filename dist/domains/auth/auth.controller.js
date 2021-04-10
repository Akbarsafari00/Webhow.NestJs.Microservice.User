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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const role_data_enum_1 = require("../role/enum/role-data.enum");
const AuthLoginRequestDto_1 = require("./dto/login/AuthLoginRequestDto");
const AuthLoginResponseDto_1 = require("./dto/login/AuthLoginResponseDto");
const auth_service_1 = require("./auth.service");
const jwt_auth_guard_1 = require("./guards/jwt-auth.guard");
const role_guard_1 = require("../role/guards/role.guard");
let AuthController = class AuthController {
    constructor(service) {
        this.service = service;
    }
    async getProfile(req) {
        return this.service.profileByUsername(req.user.username);
    }
    async login(body, res) {
        const result = await this.service.login(body.username, body.password);
        res.setHeader('Token', result.access_token);
        res.json(new AuthLoginResponseDto_1.AuthLoginResponseDto(result.user));
    }
};
__decorate([
    common_1.Get('profile'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, new role_guard_1.RoleGuard([role_data_enum_1.RoleDataEnum.Admin])),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getProfile", null);
__decorate([
    common_1.Post('login'),
    __param(0, common_1.Body()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AuthLoginRequestDto_1.AuthLoginRequestDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
AuthController = __decorate([
    common_1.Controller('api/auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map