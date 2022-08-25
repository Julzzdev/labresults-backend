import { Type } from 'class-transformer';
import { IsArray, IsString, ValidateNested } from 'class-validator';
import { Result } from '../reports.entity';
export class CreateReportDto {
  @IsString()
  patient: string;

  @IsArray()
  results: Result[];

  @IsString()
  capturedBy: string;
}
