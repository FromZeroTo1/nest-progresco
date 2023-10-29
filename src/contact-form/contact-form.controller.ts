import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import { ContactFormService } from './contact-form.service'
import { ContactFormDto } from './dto/contact-form.dto'

@Controller('contact-form')
export class ContactFormController {
  constructor(private readonly contactFormService: ContactFormService) {}

  @Get()
  async getAll() {
    return this.contactFormService.getAll()
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post()
  async send(@Body() dto: ContactFormDto) {
    return this.contactFormService.send(dto)
  }
}
