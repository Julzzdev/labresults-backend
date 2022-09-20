import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dtos/create-contact.dto';

@Controller('contacts')
export class ContactsController {
  constructor(private contactsService: ContactsService) {}

  @Get('/')
  getContacts() {
    return this.contactsService.findAll();
  }

  @Get('/:_id')
  getPatient(@Param() _id: string) {
    return this.contactsService.findOne(_id);
  }

  @Post('/')
  createContact(@Body() body: CreateContactDto) {
    return this.contactsService.create({ ...body });
  }

  @Patch('/:_id')
  updateContact(@Param() _id: string, @Body() body: Partial<CreateContactDto>) {
    return this.contactsService.update(_id, body);
  }

  @Delete('/:_id')
  deleteContact(@Param() _id: string) {
    return this.contactsService.delete(_id);
  }
}
