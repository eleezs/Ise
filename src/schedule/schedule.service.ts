import { Injectable, Inject } from "@nestjs/common";
import { SCHEDULE_REPOSITORY } from '../core/constants';
import { Schedule } from "../core/database/models/schedule.model";
import { NotFoundException } from '@nestjs/common';
import { User } from '../core/database/models'


@Injectable()
export class ScheduleService {

  constructor(@Inject(SCHEDULE_REPOSITORY) private readonly scheduleRepository: typeof Schedule) { }

  public async createSchedule(scheduleData) {
    const newSchedule = await this.scheduleRepository.create(scheduleData);
    return newSchedule;
  }

  public async getScheduleById(scheduleId: number) {
    const schedule = await this.scheduleRepository.findOne({ where: { id: scheduleId } });
    if (!schedule) throw new NotFoundException('This Schedule doesn\'t exist');
  
    return schedule;
  }

  public async getScheduleAll() {
    const schedule = await this.scheduleRepository.findAll({
      include: [{ model: User, attributes: { exclude: ['password'] } }],
  });;
  
    return schedule;
  }

  public async updateSchedule(scheduleId, updateData) {
    const schedule = await this.scheduleRepository.findOne({ where: { id: scheduleId } });
    if (!schedule) return false;

    await this.scheduleRepository.update(updateData, { where: { id: scheduleId } });
    return schedule
  }

  public async deleteSchedule(scheduleId: number) {
    const schedule = await this.scheduleRepository.findOne({ where: { id: scheduleId } });
    if (!schedule) return false;

    await this.scheduleRepository.destroy({ where: { id: scheduleId } });
  }
}