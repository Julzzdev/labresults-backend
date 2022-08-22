import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { TestsTemplatesService } from './tests-templates.service';
import { CreateTemplateDto } from './dtos/create-template.dto';
import { Test } from './tests.entity';
@Controller('templates')
export class TestsTemplatesController {
  constructor(private templateService: TestsTemplatesService) {}

  @Get('/')
  getTemplates() {
    return this.templateService.findAll();
  }

  @Post('/')
  createTemplate(@Body() body: CreateTemplateDto) {
    return this.templateService.create(
      body.name,
      body.code,
      body.method,
      body.data,
      body.equipment,
      body.technique,
    );
  }

  @Patch('/:_id')
  updateTemplate(@Param() _id: string, @Body() body: Partial<Test>) {
    return this.templateService.update(_id, body);
  }

  @Get('/:_id')
  getTemplate(@Param() _id: string) {
    return this.templateService.findOne(_id);
  }

  @Delete('/:_id')
  deleteTemplate(@Param() _id: string) {
    return this.templateService.delete(_id);
  }
}
