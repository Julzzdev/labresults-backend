import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { TestsTemplatesModule } from './tests-templates/tests-templates.module';
import { PatientsModule } from './patients/patients.module';
import { MailerModule } from './mailer/mailer.module';
import { ContactsModule } from './contacts/contacts.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(process.env.DB_URL),
    UsersModule,
    ReportsModule,
    TestsTemplatesModule,
    PatientsModule,
    MailerModule,
    ContactsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
