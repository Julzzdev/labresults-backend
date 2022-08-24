import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Patient, PatientDocument } from 'src/patients/patients.entity';
import { Report, ReportDocument } from './reports.entity';

@Injectable()
export class ReportsService {
  constructor(
    @InjectModel(Report.name) private reportModel: Model<ReportDocument>,
    @InjectModel(Patient.name) private patientModel: Model<PatientDocument>,
  ) {}

  async create(
    patient: string,
    results: Record<string, any>[],
    capturedBy: string,
  ) {
    const patientExists = await this.patientModel.findById(patient);
    if (!patientExists) {
      throw new NotFoundException('The patient does not exist');
    }
    const createdReport = new this.reportModel({
      patient,
      results,
      capturedBy,
      createdAt: new Date(),
    });

    return createdReport.save();
  }

  async findOne(id: string) {
    return await this.reportModel.findById(id);
  }

  async findAllPatientReport(patientId: string) {
    return this.reportModel
      .find({ patient: patientId })
      .populate('patient')
      .populate('capturedBy', 'name');
  }

  async findAll(startDate: string, endDate: string, page: string) {
    const reports = await this.reportModel
      .find({ createdAt: { $gte: startDate, $lte: endDate } })
      .limit(15 * 1)
      .skip((+page - 1) * 15)
      .populate('patient')
      .populate('capturedBy', 'username');

    const count = await this.reportModel.countDocuments();

    return {
      reports,
      totalPages: Math.ceil(count / 15),
      page: page,
    };
  }

  async delete(id: string) {
    const report = await this.reportModel.findByIdAndDelete(id);
    await this.patientModel.findByIdAndDelete(report.patient);
    return;
  }
}
