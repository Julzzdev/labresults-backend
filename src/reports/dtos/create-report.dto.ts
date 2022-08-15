import { IsArray, IsString } from 'class-validator';
import { Result } from '../reports.entity';

export class CreateReportDto {
  @IsString()
  patient: string;

  @IsString()
  test: string;

  @IsArray()
  results: Result[];
}
