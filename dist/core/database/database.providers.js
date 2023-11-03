"use strict";
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
exports.databaseProviders = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const constants_1 = require("../constants");
const _database_config_1 = require("./ database.config");
const models_1 = require("./models");
exports.databaseProviders = [{
        provide: constants_1.SEQUELIZE,
        useFactory: () => __awaiter(void 0, void 0, void 0, function* () {
            let config;
            switch (process.env.NODE_ENV) {
                case constants_1.DEVELOPMENT:
                    config = _database_config_1.databaseConfig.development;
                    break;
                case constants_1.TEST:
                    config = _database_config_1.databaseConfig.test;
                    break;
                case constants_1.PRODUCTION:
                    config = _database_config_1.databaseConfig.production;
                    break;
                default:
                    config = _database_config_1.databaseConfig.development;
            }
            const sequelize = new sequelize_typescript_1.Sequelize(config);
            sequelize.addModels([models_1.User, models_1.Subject, models_1.Schedule]);
            return sequelize;
        }),
    }];
