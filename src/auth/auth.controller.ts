import { Controller, Body, Post, UseGuards, Request } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto, Signin } from '../auth/dto';
import { DoesUserExist } from "../core/guards/doesUserExist.guard";
import { ValidUserExist } from "../core/guards/validUserExist.guard";


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  
  @UseGuards(DoesUserExist)
  @Post('signup')
  async signup(@Body() user: AuthDto) {
    return await this.authService.signup(user);
  }

  @UseGuards(ValidUserExist)
  @Post('login') 
  async login(@Body() user: Signin) {
    return await this.authService.login(user);
  }
}