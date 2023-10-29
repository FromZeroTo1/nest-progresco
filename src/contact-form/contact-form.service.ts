import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { ContactFormDto } from './dto/contact-form.dto'
import { returnContactFormObject } from './object/return-contact-form.object'

@Injectable()
export class ContactFormService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.contactForm.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      select: returnContactFormObject,
    })
  }

  async send(dto: ContactFormDto) {
    return this.prisma.contactForm.create({
      data: {
        fullName: dto.fullName,
        phone: dto.phone,
        email: dto.email,
      },
    })
  }
}
