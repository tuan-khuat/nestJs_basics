import { IsEmail, IsNotEmpty, IsNumber, isNumber } from 'class-validator';

export class CreateUserDto {
  id: number;

  @IsNotEmpty()
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  age: number;
}
