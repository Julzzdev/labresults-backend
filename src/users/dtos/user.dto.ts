import { Expose } from 'class-transformer';
import mongoose from 'mongoose';

export class UserDto {
  @Expose()
  id: mongoose.Schema.Types.ObjectId;

  @Expose()
  username: string;

  @Expose()
  isAdmin: boolean;

  @Expose()
  darkMode: boolean;
}
