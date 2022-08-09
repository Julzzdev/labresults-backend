import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ReportsService } from './reports/reports.service';
import { ReportsModule } from './reports/reports.module';
import { TestsTemplatesModule } from './tests-templates/tests-templates.module';
import { PatientsModule } from './patients/patients.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:4nYkypf1KUrJ2dI4@cluster0.qqgvi.mongodb.net/labresults',
    ),
    UsersModule,
    ReportsModule,
    TestsTemplatesModule,
    PatientsModule,
  ],
  controllers: [AppController],
  providers: [AppService, ReportsService],
})
export class AppModule {}
