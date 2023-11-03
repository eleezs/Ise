import { SCHEDULE_REPOSITORY } from '../core/constants';
import { Schedule } from '../core/database/models';

export const scheduleProviders = [{
    provide: SCHEDULE_REPOSITORY,
    useValue: Schedule,
}];