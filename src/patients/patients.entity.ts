import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Test } from 'src/tests-templates/tests.entity';

export type PatientDocument = Patient & Document;

@Schema()
export class Patient {
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
  dateOfBirth: Date;

  @Prop({ required: false })
  business: string;

  @Prop({ required: false })
  email: string;

  @Prop({ required: false })
  phone: string;

  @Prop({ required: true, type: [mongoose.Schema.Types.ObjectId], ref: 'Test' })
  tests: Test[];

  @Prop()
  createdAt?: Date;
}

export const PatientSchema = SchemaFactory.createForClass(Patient);
