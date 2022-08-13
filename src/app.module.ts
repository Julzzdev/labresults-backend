import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
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
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(process.env.DB_URL),
    UsersModule,
    ReportsModule,
    TestsTemplatesModule,
    PatientsModule,
  ],
  controllers: [AppController],
  providers: [AppService, ReportsService],
})
export class AppModule {}
