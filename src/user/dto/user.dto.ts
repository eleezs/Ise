import { IsNotEmpty, MinLength, IsEmail, IsEnum, IsOptional, MaxLength } from 'class-validator';

enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

export class UserDto {
  @IsNotEmpty()
  readonly first_name: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  readonly last_name: string;

  @IsNotEmpty()
  @MinLength(8)
  readonly password: string;

  @IsOptional()
  @MinLength(11)
  @MaxLength(14)
  readonly phone: string;

  @IsNotEmpty()
  @IsEnum(Gender, {
    message: 'gender must be either male or female',
  })
  readonly gender: Gender;
}