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

export class CreateContactDto {
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

  @IsString()
  dateOfBirth: string;

  @IsOptional()
  @IsString()
  business: string;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  phone: string;
}
