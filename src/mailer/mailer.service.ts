import { Injectable } from '@nestjs/common';
import { Report } from 'src/reports/reports.entity';
import { MailerService as Mailer } from '@nestjs-modules/mailer';

@Injectable()
export class MailerService {
  constructor(private mailerService: Mailer) {}

  async sendLabResults(patientEmail: string) {
    const mail = await this.mailerService.sendMail({
      to: 'karyuu.no.hokou@gmail.com',
      from: process.env.MAIL,
      subject: 'COVID TEST RESULTS',
      text: 'THIS IS AN AUTOMATIC MAIL, DO NOT REPLY',
      html: '<b>TEST</b>',
    });

    console.log(mail);
  }
}
