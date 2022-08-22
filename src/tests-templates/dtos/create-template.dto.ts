import { IsArray, IsString, IsOptional } from 'class-validator';

export class CreateTemplateDto {
  @IsString()
  name: string;

  @IsString()
  code: string;

  @IsString()
  method: string;

  @IsOptional()
  @IsString()
  equipment: string;

  @IsOptional()
  @IsString()
  technique: string;

  @IsArray()
  data: Record<string, any>[];
}
