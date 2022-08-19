import { Expose } from 'class-transformer';

export class UserDto {
  @Expose()
  _id: string;

  @Expose()
  username: string;

  @Expose()
  isAdmin: boolean;

  @Expose()
  darkMode: boolean;
}
