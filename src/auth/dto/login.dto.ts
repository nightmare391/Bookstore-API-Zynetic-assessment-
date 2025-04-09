import { IsEmail, IsNotEmpty } from 'class-validator';

// DTO for handling user login requests
export class LoginDto {
  // Must be a valid email address
  @IsEmail()
  email: string;

  // Password field should not be empty
  @IsNotEmpty()
  password: string;
}
