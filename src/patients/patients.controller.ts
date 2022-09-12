import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Patient } from './patients.entity';
import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dtos/create-patient.dto';
import { GetReportsDto } from 'src/reports/dtos/get-reports.dto';
@Controller('patients')
export class PatientsController {
  constructor(private patientsService: PatientsService) {}

  @Get('/')
  getPatients(@Query() query: any) {
    return this.patientsService.findAll(
      (query.startDate = new Date().toString()),
      (query.endDate = new Date().toString()),
      query.page,
    );
  }

  @Get('/:_id')
  getPatient(@Param() _id: string) {
    return this.patientsService.findOne(_id);
  }

  @Post('/')
  createPatient(@Body() body: CreatePatientDto) {
    return this.patientsService.create(
      body.firstname,
      body.lastname1,
      body.age,
      body.gender,
      body.dateOfBirth,
      body.tests,
      body.secondname,
      body.lastname2,
      body.email,
      body.phone,
      body.business,
    );
  }

  @Patch('/:_id')
  updatePatient(@Param() _id: string, @Body() body: Partial<Patient>) {
    return this.patientsService.update(_id, body);
  }

  @Delete('/:_id')
  deletePatient(@Param() _id: string) {
    return this.patientsService.delete(_id);
  }
}
