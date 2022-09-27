import { Body, Controller, Post } from '@nestjs/common';
import { MailerService } from './mailer.service';

@Controller('mailer')
export class MailerController {
  constructor(private mailService: MailerService) {}

  @Post('/')
  async sendMail(@Body() body: any) {
    return this.mailService.sendLabResults(body.patientEmail, body.url);
  }
}
