import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UsersService } from '../../user/users.service';

@Injectable()
export class ValidUserExist implements CanActivate {
  constructor(private readonly userService: UsersService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
      const request = context.switchToHttp().getRequest();
      return this.validateRequest(request);
  }

  async validateRequest(request) {
      const userExist = await this.userService.findOneByEmail(request.body.email);
      if (!userExist) {
        throw new ForbiddenException('Invalid email / password');
      }
      return true;
  }
}