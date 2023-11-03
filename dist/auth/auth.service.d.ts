import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../user/users.service';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    validateUser(username: string, pass: string): Promise<{
        first_name: string;
        last_name: string;
        email: string;
        phone: string;
        gender: string;
        user_status: string;
        role: string;
        id?: any;
        createdAt?: any;
        updatedAt?: any;
        deletedAt?: any;
        version?: any;
        _attributes: import("../core/database/models").User;
        dataValues: import("../core/database/models").User;
        _creationAttributes: import("../core/database/models").User;
        isNewRecord: boolean;
        sequelize: import("sequelize").Sequelize;
        _model: import("sequelize").Model<import("../core/database/models").User, import("../core/database/models").User>;
    }>;
    login(user: any): Promise<{
        result: {
            first_name: string;
            last_name: string;
            email: string;
            phone: string;
            gender: string;
            user_status: string;
            role: string;
            id?: any;
            createdAt?: any;
            updatedAt?: any;
            deletedAt?: any;
            version?: any;
            _attributes: import("../core/database/models").User;
            dataValues: import("../core/database/models").User;
            _creationAttributes: import("../core/database/models").User;
            isNewRecord: boolean;
            sequelize: import("sequelize").Sequelize;
            _model: import("sequelize").Model<import("../core/database/models").User, import("../core/database/models").User>;
        };
        token: string;
    }>;
    signup(user: any): Promise<{
        user: {
            first_name: string;
            last_name: string;
            email: string;
            phone: string;
            gender: string;
            user_status: string;
            role: string;
            id?: any;
            createdAt?: any;
            updatedAt?: any;
            deletedAt?: any;
            version?: any;
            _attributes: import("../core/database/models").User;
            dataValues: import("../core/database/models").User;
            _creationAttributes: import("../core/database/models").User;
            isNewRecord: boolean;
            sequelize: import("sequelize").Sequelize;
            _model: import("sequelize").Model<import("../core/database/models").User, import("../core/database/models").User>;
        };
        token: string;
    }>;
    private generateToken;
    private hashPassword;
    private comparePassword;
}
