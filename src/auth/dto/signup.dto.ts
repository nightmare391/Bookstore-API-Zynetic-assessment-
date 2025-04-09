import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

// DTO for handling user signup requests
export class SignupDto {
  // Must be a valid email address
  @IsEmail()
  email: string;

  // Password must not be empty and must be at least 6 characters long
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
