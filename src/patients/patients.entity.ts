import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PatientDocument = Patient & Document;

@Schema()
export class Patient {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  age: number;

  @Prop({ required: true })
  gender: boolean;
}

export const PatientSchema = SchemaFactory.createForClass(Patient);
