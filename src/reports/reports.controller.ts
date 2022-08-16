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

  @Post('/')
  createReport(@Body() body: CreateReportDto) {
    return this.reportsService.create(
      body.patient,
      body.test,
      body.results,
      body.capturedBy,
    );
  }
}
