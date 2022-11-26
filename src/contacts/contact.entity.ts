import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ContactDocument = Contact & Document;

@Schema()
export class Contact {
  @Prop({ required: true })
  firstname: string;

  @Prop({ required: false })
  secondname: string;

  @Prop({ required: true })
  lastname1: string;

  @Prop({ required: false })
  lastname2: string;

  @Prop({ required: true })
  age: number;

  @Prop({ required: true })
  gender: boolean;

  @Prop({ required: false })
  dateOfBirth: string;

  @Prop({ required: false })
  business: string;

  @Prop({ required: false })
  email: string;

  @Prop({ required: false })
  phone: string;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);
