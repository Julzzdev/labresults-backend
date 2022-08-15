import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Patient } from './patients.entity';
import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dtos/create-patient.dto';
@Controller('patients')
export class PatientsController {
  constructor(private patientsService: PatientsService) {}

  @Get('/')
  getPatients() {
    return this.patientsService.findAll();
  }

  @Get('/:_id')
  getPatient(@Param() _id: string) {
    return this.patientsService.findOne(_id);
  }

  @Post('/')
  createPatient(@Body() body: CreatePatientDto) {
    return this.patientsService.create(
      body.name,
      body.age,
      body.gender,
      body.dateOfBirth,
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
