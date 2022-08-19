import { IsArray, IsString } from 'class-validator';
export class CreateReportDto {
  @IsString()
  patient: string;

  @IsArray()
  results: Record<string, any>[];

  @IsString()
  capturedBy: string;
}
