import { User } from '../core/database/models/user.model';
import { UserDto } from './dto/user.dto';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: typeof User);
    create(user: UserDto): Promise<User>;
    findOneByEmail(email: string): Promise<User>;
    findOneById(id: number): Promise<User>;
    findUserByPhone(phone: string): Promise<User>;
}
