"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = __importStar(require("bcryptjs"));
const dotenv = __importStar(require("dotenv"));
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../user/users.service");
dotenv.config();
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    validateUser(username, pass) {
        return __awaiter(this, void 0, void 0, function* () {
            // find if user exist with this email
            const user = yield this.userService.findOneByEmail(username);
            if (!user) {
                return null;
            }
            // find if user password match
            const match = yield this.comparePassword(pass, user.password);
            if (!match) {
                return null;
            }
            const _a = user['dataValues'], { password } = _a, result = __rest(_a, ["password"]);
            return result;
        });
    }
    login(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const user_details = yield this.userService.findOneByEmail(user.email);
            if (!user_details)
                throw new common_1.ForbiddenException('Credential incorrect');
            const valid_password = this.comparePassword(user.password, user_details.password);
            if (!valid_password)
                throw new common_1.ForbiddenException('Credential incorrect');
            if (user_details.user_status !== 'active')
                throw new common_1.ForbiddenException('User is not active');
            const _a = user_details['dataValues'], { password } = _a, result = __rest(_a, ["password"]);
            const token = yield this.generateToken({ user_id: result.id, role: result.role, email: result.email });
            return { result, token };
        });
    }
    signup(user) {
        return __awaiter(this, void 0, void 0, function* () {
            // hash the password
            const pass = yield this.hashPassword(user.password);
            // create the user
            const newUser = yield this.userService.create(Object.assign(Object.assign({}, user), { password: pass }));
            const _a = newUser['dataValues'], { password } = _a, result = __rest(_a, ["password"]);
            // generate token
            const token = yield this.generateToken(result);
            // return the user and the token
            return { user: result, token };
        });
    }
    generateToken(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = yield this.jwtService.signAsync(user, {
                expiresIn: process.env.TOKEN_EXPIRATION,
                secret: process.env.JWTKEY
            });
            return token;
        });
    }
    hashPassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            const hash = yield bcrypt.hash(password, 10);
            return hash;
        });
    }
    comparePassword(enteredPassword, dbPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            const match = yield bcrypt.compare(enteredPassword, dbPassword);
            return match;
        });
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService, jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
