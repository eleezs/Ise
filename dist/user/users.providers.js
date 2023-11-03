"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersProviders = void 0;
const user_model_1 = require("../core/database/models/user.model");
const constants_1 = require("../core/constants");
exports.usersProviders = [{
        provide: constants_1.USER_REPOSITORY,
        useValue: user_model_1.User,
    }];
