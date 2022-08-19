import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type TestDocument = Test & Document;
@Schema()
export class Test {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  code: string;
  
  @Prop({ required: true })
  method: string;

  @Prop({ required: false })
  equipment: string;

  @Prop({ type: Array, required: true })
  data: Record<string, any>[];
}

export const TestSchema = SchemaFactory.createForClass(Test);
