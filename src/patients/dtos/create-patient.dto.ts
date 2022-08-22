import {
  IsArray,
  IsBoolean,
  IsDate,
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';
import { Test } from 'src/tests-templates/tests.entity';

export class CreatePatientDto {
  @IsString()
  firstname: string;

  @IsOptional()
  @IsString()
  secondname: string;

  @IsString()
  lastname1: string;

  @IsOptional()
  @IsString()
  lastname2: string;

  @IsNumber()
  age: number;

  @IsBoolean()
  gender: boolean;

  @Type(() => Date)
  @IsDate()
  dateOfBirth: Date;

  @IsOptional()
  @IsString()
  business: string;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  phone: string;

  @IsArray()
  tests: Test[];
}
