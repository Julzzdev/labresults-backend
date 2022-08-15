import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Test, TestDocument, TestField } from './tests.entity';
@Injectable()
export class TestsTemplatesService {
  constructor(@InjectModel(Test.name) private testModel: Model<TestDocument>) {}

  create(name: string, data: TestField[]): Promise<Test> {
    const createdTest = new this.testModel({ name, data });

    return createdTest.save();
  }

  async findOne(id: string) {
    const user = await this.testModel.findById(id);
    if (!user) {
      throw new NotFoundException('Test template not found');
    }
    return user;
  }

  async findAll(): Promise<Test[]> {
    return await this.testModel.find();
  }

  async update(id: string, attrs: Partial<Test>) {
    const test = await this.testModel.findByIdAndUpdate(id, attrs);
    if (!test) {
      throw new NotFoundException('Test template not found');
    }
    return test;
  }

  async delete(id: string) {
    const test = await this.testModel.findByIdAndDelete(id);
    if (!test) {
      throw new NotFoundException('Test template not found');
    }
    return test;
  }
}
