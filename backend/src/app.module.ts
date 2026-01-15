import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CompanyModule } from './company/company.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UsersModule, CompanyModule, MongooseModule.forRoot('mongodb://localhost:27017/internship')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
