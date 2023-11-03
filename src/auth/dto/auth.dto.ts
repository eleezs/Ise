import { IsNotEmpty, MinLength, IsEmail, IsEnum, IsOptional, MaxLength } from 'class-validator';

enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

enum Role {
  STUDENT = 'student',
  ADMIN = 'admin',
  TUTOR = 'tutor'
}

export class AuthDto {
  @IsNotEmpty()
  first_name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  last_name: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @IsOptional()
  @MinLength(11)
  @MaxLength(14)
  phone: string;

  @IsNotEmpty()
  @IsEnum(Gender, {
    message: 'Gender must be either male or female',
  })
  gender: string

  @IsNotEmpty()
  @IsEnum(Role, {
    message: 'Role must be either admin, student or tutor'
  })
  role: string;
}