import { Controller, Body, Post, UseGuards, Request, Delete, Put, Get } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UserDto } from "./dto";


@Controller('admin')
export class AdminController {
  constructor(private userService: UsersService) {}
  
  // @Put('edit/user')
  // async signup(@Body() user: UserDto) {
  //   return await this.userService.signup(user);
  // }

  // @Delete('delete/user') 
  // async deleteUser(@Body() user: Signin) {
  //   return await this.userService.login(user);
  // }

  // @Put('change/user/status') 
  // async changeStatus(@Body() user: Signin) {
  //   return await this.userService.login(user);
  // }

}

@Controller('user')
export class FetchCOntroller {
  constructor(private userService: UsersService) {}

  //get all user and search by status, email
  // @Get('/user/status') 
  // async delete(@Body() user: Signin) {
  //   return await this.userService.login(user);
  // }

  // get user by id

}