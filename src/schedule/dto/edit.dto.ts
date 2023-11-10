import { IsNotEmpty, IsEnum, IsOptional, IsDate } from 'class-validator';

enum Task_Status {
  closed = 'closed',
  in_progress = 'in_progress',
  pending = 'pending',
  cancelled = 'cancelled',
  active = 'active'
}

export class EditDto {
  @IsNotEmpty()
  task_name: string;

  @IsNotEmpty()
  @IsDate()
  start_date: string;
  
  @IsNotEmpty()
  @IsDate()
  end_date: string;

  @IsNotEmpty()
  @IsEnum(Task_Status, {
    message: 'Task status must be either active, closed, pending, cancelled or in_progress',
  })
  task_status: string;

  @IsOptional()
  subject_id: number

  @IsOptional()
  tutor_id: number

  @IsOptional()
  student_id: number
}