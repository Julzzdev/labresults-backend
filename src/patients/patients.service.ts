import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Patient, PatientDocument } from './patients.entity';

@Injectable()
export class PatientsService {
  constructor(
    @InjectModel(Patient.name) private patientModel: Model<PatientDocument>,
  ) {}

  create(
    name: string,
    age: number,
    gender: boolean,
    dateOfBirth: Date,
  ): Promise<Patient> {
    const createdPatient = new this.patientModel({
      name,
      age,
      gender,
      dateOfBirth,
    });

    return createdPatient.save();
  }

  async findAll(): Promise<Patient[]> {
    return await this.patientModel.find();
  }

  async findOne(id: string): Promise<Patient> {
    const patient = await this.patientModel.findById(id);
    if (!patient) {
      throw new NotFoundException('Patient not found');
    }
    return patient;
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
