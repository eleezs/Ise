import { User } from '../core/database/models/user.model';
export declare const usersProviders: {
    provide: string;
    useValue: typeof User;
}[];
