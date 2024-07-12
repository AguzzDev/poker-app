import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { LoginInputValues } from './loginInputValues';

export class RegisterInputValues extends LoginInputValues {
  @IsNotEmpty({ message: 'Username is required' })
  @MinLength(3, { message: '3 characters minimum' })
  username: string;

  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail()
  email: string;

  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(10, { message: '10 characters minimum' })
  password: string;
}
