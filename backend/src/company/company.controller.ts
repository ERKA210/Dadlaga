import { Controller, Get, Post, Body } from '@nestjs/common';
import { CompanyService } from './company.service';

@Controller('api/company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get()
  getCompanies() {
    return this.companyService.findAll();
  }

  @Post()
  createCompany(@Body() body: any) {
    return this.companyService.create(body);
  }
}
