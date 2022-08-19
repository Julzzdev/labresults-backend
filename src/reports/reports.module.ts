import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { Report, ReportSchema } from './reports.entity';
import { Patient, PatientSchema } from 'src/patients/patients.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Report.name, schema: ReportSchema }]),
    MongooseModule.forFeature([{ name: Patient.name, schema: PatientSchema }]),
  ],
  providers: [ReportsService],
  controllers: [ReportsController],
})
export class ReportsModule {}
