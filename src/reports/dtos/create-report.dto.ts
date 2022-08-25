import { IsArray, IsString, ValidateNested } from 'class-validator';
export class CreateReportDto {
  @IsString()
  patient: string;

  @ValidateNested()
  results: {
    test: string;
    data: Record<string, any>[];
  };

  @IsString()
  capturedBy: string;
}
