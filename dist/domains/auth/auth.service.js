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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/user.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const user_mapper_1 = require("../user/mapers/user.mapper");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async validateUser(username, pass) {
        const user = await this.userService.findByUsername(username);
        return user && bcrypt.compareSync(pass, user.password);
    }
    async profileByUsername(username) {
        const res = await this.userService.findByUsername(username);
        return user_mapper_1.UserMapper.mapToDto(res);
    }
    async login(username, pass) {
        const user = await this.userService.findByUsername(username);
        if (!user)
            throw new common_1.NotFoundException('cannot found user with this username');
        const validateResult = await this.validateUser(user.username, pass);
        if (validateResult === false)
            throw new common_1.UnauthorizedException('username or password incorrect');
        const payload = {
            username: user.username,
            sub: user.id,
            roles: user.roles.map((i) => i.role),
        };
        return {
            access_token: this.jwtService.sign(payload),
            user: user_mapper_1.UserMapper.mapToDto(user),
        };
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map