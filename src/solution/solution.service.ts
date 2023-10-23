import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { SolutionDto } from './dto/solution.dto'
import { returnSolutionObject } from './object/return-solution.object'

@Injectable()
export class SolutionService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.solution.findMany({
      orderBy: {
        id: 'asc',
      },
      select: returnSolutionObject,
    })
  }

  // Admin

  async byId(id: number) {
    const solution = await this.prisma.solution.findUnique({
      where: {
        id,
      },
      select: returnSolutionObject,
    })

    if (!solution) throw new NotFoundException('Решение не найдено')

    return solution
  }

  async create() {
    return this.prisma.solution.create({
      data: {
        name: '',
        image: '',
      },
    })
  }

  async update(id: number, dto: SolutionDto) {
    return this.prisma.solution.update({
      where: {
        id,
      },
      data: {
        name: dto.name,
        image: dto.image,
      },
    })
  }

  async delete(id: number) {
    return this.prisma.solution.delete({
      where: {
        id,
      },
    })
  }
}
