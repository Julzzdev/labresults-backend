import { Controller, Get, Param } from '@nestjs/common';
import { MailerService } from './mailer.service';

@Controller('mailer')
export class MailerController {
  constructor(private mailService: MailerService) {}

  @Get('/:patientMail')
  async sendMail(@Param() patientEmail: string) {
    return this.mailService.sendLabResults(patientEmail);
  }
}
