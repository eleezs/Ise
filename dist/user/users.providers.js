"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersProviders = void 0;
const models_1 = require("../core/database/models");
const constants_1 = require("../core/constants");
exports.usersProviders = [{
        provide: constants_1.USER_REPOSITORY,
        useValue: models_1.User,
    }];
