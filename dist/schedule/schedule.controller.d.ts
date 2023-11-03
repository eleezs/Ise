import { CreateDto, EditDto } from "./dto";
import { ScheduleService } from "./schedule.service";
export declare class ScheduleController {
    private scheduleService;
    constructor(scheduleService: ScheduleService);
    createSchedule(data: CreateDto): Promise<import("../core/database/models").Schedule>;
    editSchedule(data: EditDto, id: number): Promise<false | import("../core/database/models").Schedule>;
    getScheduleAll(): Promise<import("../core/database/models").Schedule[]>;
    getScheduleById(id: number): Promise<import("../core/database/models").Schedule>;
    deleteSchedule(id: number): Promise<boolean>;
}
