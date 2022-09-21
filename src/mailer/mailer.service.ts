import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Mailer, MailerDocument } from './mailer.entity';
const nodemailer = require('nodemailer');
const puppeteer = require('puppeteer');
const useProxy = require('puppeteer-page-proxy');
@Injectable()
export class MailerService {
  constructor(
    @InjectModel(Mailer.name) private mailerModel: Model<MailerDocument>,
  ) {}

  async sendLabResults(
    patientEmail: string,
    patientId: string,
    isFlat: string,
  ) {
    // TODO: add puppeteer for PDF creation and attachment
    const mailUser = await this.mailerModel.findOne();
    // await useProxy(
    //   'http://front:80/reports/' + patientId + '/' + isFlat,
    //   'http://front:80/reports/' + patientId + '/' + isFlat,
    // );
    const browser = await puppeteer.launch({
      executablePath: '/usr/bin/chromium-browser',
      headless: true,
      args: [
        '--disable-gpu',
        '--full-memory-crash-report',
        '--unlimited-storage',
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
      ],
    });
    const page = await browser.newPage();
    await page.emulateTimezone('America/Mexico_City');
    const baseUrl = 'http://front:80/reports/';
    await page.goto(baseUrl + patientId + '/' + isFlat, {
      waitUntil: 'networkidle0',
    });
    const pdf = await page.pdf({ format: 'A4' });
    await browser.close();

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: mailUser.mail,
        pass: mailUser.password,
      },
    });

    let mailData = {
      from: mailUser.mail,
      to: patientEmail,
      subject: 'LAB RESULTS',
      text: 'THIS IS AN AUTOMATIC MAIL, DO NOT REPLY',
      attachments: [
        {
          filename: 'LAB_RESULTS.pdf',
          content: pdf,
        },
      ],
    };

    transporter.sendMail(mailData, (error, info) => {
      if (error) {
        return console.log(error);
      }
    });
  }
}
