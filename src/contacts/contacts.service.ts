import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Contact, ContactDocument } from './contact.entity';
import { CreateContactDto } from './dtos/create-contact.dto';

@Injectable()
export class ContactsService {
  constructor(
    @InjectModel(Contact.name) private contactModel: Model<ContactDocument>,
  ) {}

  async create(body: CreateContactDto) {
    return await this.contactModel.create({ ...body });
  }

  async findAll() {
    return await this.contactModel.find();
  }

  async findOne(id: string) {
    const contact = await this.contactModel.findById(id);
    if (!contact) {
      throw new NotFoundException('Contact not found');
    }
    return contact;
  }

  async update(id: string, attrs: Partial<Contact>) {
    const contact = await this.contactModel.findByIdAndUpdate(id, attrs);
    if (!contact) {
      throw new NotFoundException('Contact not found');
    }
    return contact;
  }

  async delete(id: string) {
    const contact = await this.contactModel.findByIdAndDelete(id);
    if (!contact) {
      throw new NotFoundException('Contact not found');
    }
    return contact;
  }
}
