import { Patient } from 'src/patients/patients.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from 'src/users/user.entity';

export type ReportDocument = Report & Document;

@Schema()
export class Report {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Patient' })
  patient: Patient;

  @Prop({ type: Array, required: true })
  results: Record<string, any>[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  capturedBy: User;
}

export const ReportSchema = SchemaFactory.createForClass(Report);
