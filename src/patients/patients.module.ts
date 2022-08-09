import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PatientsService } from './patients.service';
import { PatientsController } from './patients.controller';
import { Patient, PatientSchema } from './patients.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Patient.name, schema: PatientSchema }]),
  ],
  providers: [PatientsService],
  controllers: [PatientsController],
})
export class PatientsModule {}
