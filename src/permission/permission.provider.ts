import { User } from '../core/database/models';
import { PERMISSION_REPOSITORY } from '../core/constants';

export const permissionProviders = [{
    provide: PERMISSION_REPOSITORY,
    useValue: User,
}];