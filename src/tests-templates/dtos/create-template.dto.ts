import { IsArray, IsString, ValidateNested } from 'class-validator';

export class CreateTemplateDto {
  @IsString()
  name: string;

  @IsString()
  method: string;

  @IsString()
  equipment: string;

  @IsArray()
  data: Record<string, any>[];
}
