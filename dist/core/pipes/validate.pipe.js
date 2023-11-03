"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateInputPipe = void 0;
const common_1 = require("@nestjs/common");
let ValidateInputPipe = class ValidateInputPipe extends common_1.ValidationPipe {
    transform(value, metadata) {
        const _super = Object.create(null, {
            transform: { get: () => super.transform }
        });
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield _super.transform.call(this, value, metadata);
            }
            catch (e) {
                if (e instanceof common_1.BadRequestException) {
                    throw new common_1.UnprocessableEntityException(this.handleError(e));
                }
            }
        });
    }
    handleError(errors) {
        console.log(errors, 800);
        return errors.map(error => error.constraints);
    }
};
ValidateInputPipe = __decorate([
    (0, common_1.Injectable)()
], ValidateInputPipe);
exports.ValidateInputPipe = ValidateInputPipe;
