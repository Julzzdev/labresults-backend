import { Patient } from 'src/patients/patients.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Test } from '@nestjs/testing';

export type ReportDocument = Report & Document;

@Schema()
export class Report {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Patient' })
  patient: Patient;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Test' })
  test: Test;

  @Prop({ required: true, type: Object })
  data: Record<string, any>;
}

export const ReportSchema = SchemaFactory.createForClass(Report);
