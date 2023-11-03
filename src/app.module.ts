import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { ScheduleModule } from './schedule/schedule.module';
import { UserModule } from './user/user.module';
import { RolePermissionModule } from './role_permission/role_permission.module';
import { DatabaseModule } from './core/database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    AuthModule, ScheduleModule, UserModule, RolePermissionModule],
})

export class AppModule {}
