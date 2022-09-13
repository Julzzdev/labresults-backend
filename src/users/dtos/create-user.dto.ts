import { IsBoolean, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsBoolean()
  darkMode: boolean;

  @IsBoolean()
  isAdmin: boolean;
}
