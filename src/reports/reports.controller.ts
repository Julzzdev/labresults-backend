import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ReportsService } from './reports.service';
import { CreateReportDto } from 'src/reports/dtos/create-report.dto';

@Controller('reports')
export class ReportsController {
  constructor(private reportsService: ReportsService) {}

  @Get('/')
  getReports() {
    return this.reportsService.findAll();
  }

  @Get('/:_id')
  getReport(@Param() _id: string) {
    return this.reportsService.findOne(_id);
  }

  @Get('/:patientId')
  getReportsByPatient(@Param() patientId: string) {
    return this.reportsService.findAllPatientReport(patientId);
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
