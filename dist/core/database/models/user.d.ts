import { Model } from 'sequelize-typescript';
export declare class User extends Model<User> {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    phone: string;
    gender: string;
    user_status: string;
}
