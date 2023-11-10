import { Controller, Body, Post, UseGuards, Request, Put, Param, Get, Delete } from "@nestjs/common";
import { AuthGuard } from '@nestjs/passport';
import { CreateDto, EditDto } from "./dto";
import { ScheduleService } from "./schedule.service";

@Controller('schedule')
export class ScheduleController {
  constructor(private scheduleService: ScheduleService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  async createSchedule(@Body() data: CreateDto) {
    return await this.scheduleService.createSchedule(data);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('edit') 
  async editSchedule(@Body() data: EditDto, @Param() id: number) {
    return await this.scheduleService.updateSchedule(id, data);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('all')
  async getScheduleAll() {
    return await this.scheduleService.getScheduleAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/by/:id') 
  async getScheduleById(@Param() id: number) {
    return await this.scheduleService.getScheduleById(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('/by/:id') 
  async deleteSchedule(@Param() id: number) {
    return await this.scheduleService.deleteSchedule(id);
  }
}