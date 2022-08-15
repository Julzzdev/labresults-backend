import { IsArray, IsString } from 'class-validator';
import { TestField } from '../tests.entity';

export class CreateTemplateDto {
  @IsString()
  name: string;

  @IsArray()
  data: TestField[];
}
