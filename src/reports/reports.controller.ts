import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { ReportsService } from './reports.service';
import { CreateReportDto } from 'src/reports/dtos/create-report.dto';
import { GetReportsDto } from './dtos/get-reports.dto';

@Controller('reports')
export class ReportsController {
  constructor(private reportsService: ReportsService) {}

  @Get('/')
  getReports(@Query() query: GetReportsDto) {
    return this.reportsService.findAll(
      (query.startDate = new Date().toString()),
      (query.endDate = new Date().toString()),
      query.page,
    );
  }

  @Get('/report/:_id')
  getReport(@Param() _id: string) {
    return this.reportsService.findOne(_id);
  }

  @Get('/patient/:_id')
  getReportsByPatient(@Param() _id: string) {
    return this.reportsService.findAllPatientReport(_id);
  }

  @Post('/')
  createReport(@Body() body: CreateReportDto) {
    return this.reportsService.create(
      body.patient,
      body.results,
      body.capturedBy,
    );
  }

  @Delete('/:_id')
  deleteReport(@Param() _id: string) {
    return this.reportsService.delete(_id);
  }
}
