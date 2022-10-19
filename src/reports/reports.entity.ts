import { Patient } from 'src/patients/patients.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from 'src/users/user.entity';

export type ReportDocument = Report & Document;

@Schema()
export class Result {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Test', required: true })
  testId: string;

  @Prop({ type: mongoose.Schema.Types.Mixed, required: true })
  data: Record<string, any>[];
}

export const ResultSchema = SchemaFactory.createForClass(Result);
@Schema()
export class Report {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Patient' })
  patient: Patient;

  @Prop({ type: [ResultSchema], required: true })
  results: Result[];

  @Prop()
  doctor: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  capturedBy: User;

  @Prop()
  createdAt?: Date;
}

export const ReportSchema = SchemaFactory.createForClass(Report);
