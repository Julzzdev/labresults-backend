import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Test } from 'src/tests-templates/tests.entity';
import { Patient, PatientDocument } from './patients.entity';

@Injectable()
export class PatientsService {
  constructor(
    @InjectModel(Patient.name) private patientModel: Model<PatientDocument>,
  ) {}

  create(
    firstname: string,
    lastname1: string,
    age: number,
    gender: boolean,
    dateOfBirth: Date,
    tests: Test[],
    secondname?: string,
    lastname2?: string,
    email?: string,
    phone?: string,
    business?: string,
  ): Promise<Patient> {
    const createdPatient = new this.patientModel({
      firstname,
      lastname1,
      age,
      gender,
      dateOfBirth,
      tests,
      secondname,
      lastname2,
      email,
      phone,
      business,
      createdAt: new Date(),
    });

    return createdPatient.save();
  }

  async findAll(
    startDate: string,
    endDate: string,
    page: string,
  ): Promise<Patient[]> {
    return await this.patientModel
      .find({ createdAt: { $gte: startDate, $lte: endDate } })
      .limit(15 * 1)
      .skip((+page - 1) * 15)
      .populate('tests', 'name');
  }

  async findOne(id: string): Promise<Patient> {
    const patient = await this.patientModel.findById(id);
    if (!patient) {
      throw new NotFoundException('Patient not found');
    }
    return patient.populate('tests');
  }

  async update(id: string, attrs: Partial<Patient>): Promise<Patient> {
    const patient = await this.patientModel.findByIdAndUpdate(id, attrs);
    if (!patient) {
      throw new NotFoundException('Patient not found');
    }
    return patient;
  }

  async delete(id: string) {
    const patient = await this.patientModel.findByIdAndDelete(id);
    if (!patient) {
      throw new NotFoundException('Patient not found');
    }
    return patient;
  }
}
