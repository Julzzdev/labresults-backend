import { Patient } from 'src/patients/patients.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from 'src/users/user.entity';
import { Test } from 'src/tests-templates/tests.entity';

export type ReportDocument = Report & Document;

@Schema()
export class Report {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Patient' })
  patient: Patient;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Test' })
  test: Test;

  @Prop({ type: Array, required: true })
  results: Record<string, any>[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  capturedBy: User;
}

export const ReportSchema = SchemaFactory.createForClass(Report);
