import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { ServiceDto } from './dto/service.dto'
import { returnServiceObject } from './object/return-service'

@Injectable()
export class ServiceService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.service.findMany({
      orderBy: {
        id: 'asc',
      },
      select: returnServiceObject,
    })
  }

  // Admin

  async byId(id: number) {
    const service = await this.prisma.service.findUnique({
      where: {
        id,
      },
      select: returnServiceObject,
    })

    if (!service) throw new NotFoundException('Услуга не найдена')

    return service
  }

  async create() {
    return this.prisma.service.create({
      data: {
        name: '',
        image: '',
      },
    })
  }

  async update(id: number, dto: ServiceDto) {
    return this.prisma.service.update({
      where: {
        id,
      },
      data: {
        name: dto.name,
        description: dto.description,
        mobileDescription: dto.mobileDescription,
        image: dto.image,
      },
    })
  }

  async delete(id: number) {
    return this.prisma.service.delete({
      where: {
        id,
      },
    })
  }
}
