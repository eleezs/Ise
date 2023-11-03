import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UsersService } from '../../user/users.service';

@Injectable()
export class VerifyUserRole implements CanActivate {
  constructor(private readonly userService: UsersService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
      const request = context.switchToHttp().getRequest();
      return this.validateRequest(request);
  }

  async validateRequest(request) {
    console.log(request.headers)
      const userExist = await this.userService.findOneByEmail(request.body.email);
      if (userExist) {
        throw new ForbiddenException('This email already exist');
      }

      const userPhone = await this.userService.findUserByPhone(request.body.phone);
      if (userPhone) {
        throw new ForbiddenException('This phone number already exist');
      }
      return true;
  }
}