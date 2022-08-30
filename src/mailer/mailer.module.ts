import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MailerController } from './mailer.controller';
import { Mailer, MailerSchema } from './mailer.entity';
import { MailerService } from './mailer.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Mailer.name, schema: MailerSchema }]),
  ],
  controllers: [MailerController],
  providers: [MailerService],
  exports: [MailerService],
})
export class MailerModule {}
