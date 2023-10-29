import { Module } from '@nestjs/common'
import { ContactFormController } from './contact-form.controller'
import { ContactFormService } from './contact-form.service'
import { PrismaService } from 'src/prisma.service'

@Module({
  controllers: [ContactFormController],
  providers: [ContactFormService, PrismaService],
})
export class ContactFormModule {}
