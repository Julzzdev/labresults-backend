import { IsBoolean, IsDate, IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreatePatientDto {
  @IsString()
  name: string;

  @IsNumber()
  age: number;

  @IsBoolean()
  gender: boolean;

  @Type(() => Date)
  @IsDate()
  dateOfBirth: Date;
}
