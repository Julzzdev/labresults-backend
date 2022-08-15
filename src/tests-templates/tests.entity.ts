import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TestDocument = Test & Document;

@Schema()
export class TestField {
  @Prop({ required: true })
  parameter: string;

  @Prop({ required: true })
  method: string;

  @Prop({ required: false })
  unit: string;

  @Prop({ required: true })
  reference: string;
}
export const TestFieldSchema = SchemaFactory.createForClass(TestField);

@Schema()
export class Test {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, type: [TestFieldSchema] })
  data: TestField[];
}

export const TestSchema = SchemaFactory.createForClass(Test);
