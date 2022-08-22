import { Injectable } from '@nestjs/common';
import { Report } from 'src/reports/reports.entity';
const nodemailer = require('nodemailer');
@Injectable()
export class MailerService {
  async sendLabResults(patientEmail: string) {
    // TODO: add puppeteer for PDF creation and attachment

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL,
        pass: process.env.PASS,
      },
    });

    let mailData = {
      from: process.env.MAIL,
      to: patientEmail,
      subject: 'TEST RESULTS',
      text: 'THIS IS AN AUTOMATIC MAIL, DO NOT REPLY',
    };

    transporter.sendMail(mailData, (error, info) => {
      if (error) {
        return console.log(error);
      }
    });
  }
}
