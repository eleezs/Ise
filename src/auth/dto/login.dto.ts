import { IsNotEmpty, IsEmail } from 'class-validator';

export class Signin {
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}