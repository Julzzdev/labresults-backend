import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: false })
  isAdmin: boolean;

  @Prop(
    raw({
      darkMode: { type: Boolean, default: false },
      primaryColor: { type: String, default: '#ff6b6b' },
      secondaryColor: { type: String, default: '#f783ac' },
    }),
  )
  preferences: Record<string, any>;
}

export const UserSchema = SchemaFactory.createForClass(User);
