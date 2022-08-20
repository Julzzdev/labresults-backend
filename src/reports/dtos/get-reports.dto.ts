import { IsDateString, IsString } from 'class-validator';

export class GetReportsDto {
  @IsDateString()
  startDate: string;

  @IsDateString()
  endDate: string;

  @IsString()
  page: string;
}
