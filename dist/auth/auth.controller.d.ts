import { AuthService } from "./auth.service";
import { AuthDto, Signin } from '../auth/dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(user: AuthDto): Promise<{
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
    login(user: Signin): Promise<{
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
}
