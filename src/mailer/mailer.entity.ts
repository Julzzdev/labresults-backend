import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type MailerDocument = Mailer & Document;

@Schema()
export class Mailer {
  @Prop({ required: true })
  mail: string;

  @Prop({ required: true })
  password: string;
}

export const MailerSchema = SchemaFactory.createForClass(Mailer);
