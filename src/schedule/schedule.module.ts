import { Module } from '@nestjs/common';
import { ScheduleController } from './schedule.controller';
import { ScheduleService } from './schedule.service';
import { scheduleProviders } from './schedule.providers';

@Module({
  controllers: [ScheduleController],
  providers: [ScheduleService, ...scheduleProviders]
})

export class ScheduleModule {}
