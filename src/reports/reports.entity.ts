import { Patient } from 'src/patients/patients.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Test } from 'src/tests-templates/tests.entity';
import { User } from 'src/users/user.entity';

export type ReportDocument = Report & Document;

@Schema()
export class Result {
  @Prop({ required: true })
  result: string;
}

export const ResultSchema = SchemaFactory.createForClass(Result);

@Schema()
export class Report {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Patient' })
  patient: Patient;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Test' })
  test: Test;

  @Prop({ type: [ResultSchema] })
  results: Result[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  capturedBy: User;
}

export const ReportSchema = SchemaFactory.createForClass(Report);
