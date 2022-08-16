import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Report, ReportDocument } from './reports.entity';

@Injectable()
export class ReportsService {
  constructor(
    @InjectModel(Report.name) private reportModel: Model<ReportDocument>,
  ) {}

  create(
    patient: string,
    test: string,
    results: Record<string, any>,
    capturedBy: string,
  ) {
    const createdReport = new this.reportModel({
      patient,
      test,
      results,
      capturedBy,
    });

    return createdReport.save();
  }

  async findAll() {
    return await this.reportModel
      .find()
      .populate('patient')
      .populate('test')
      .populate('capturedBy');
  }
}
