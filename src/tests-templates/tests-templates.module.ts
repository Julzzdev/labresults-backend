import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TestsTemplatesService } from './tests-templates.service';
import { TestsTemplatesController } from './tests-templates.controller';
import { Test, TestSchema } from './tests.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Test.name, schema: TestSchema }]),
  ],
  providers: [TestsTemplatesService],
  controllers: [TestsTemplatesController],
})
export class TestsTemplatesModule {}
