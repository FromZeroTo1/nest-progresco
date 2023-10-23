import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { TaskDto } from './dto/task.dto'
import { returnTaskObject } from './object/return-task.object'

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.task.findMany({
      orderBy: {
        id: 'asc',
      },
      select: returnTaskObject,
    })
  }

  // Admin

  async byId(id: number) {
    const task = await this.prisma.task.findUnique({
      where: {
        id,
      },
      select: returnTaskObject,
    })

    if (!task) throw new NotFoundException('Решение не найдено')

    return task
  }

  async create() {
    return this.prisma.task.create({
      data: {
        name: '',
        pros: '',
        cons: '',
        image: '',
      },
    })
  }

  async update(id: number, dto: TaskDto) {
    return this.prisma.task.update({
      where: {
        id,
      },
      data: {
        name: dto.name,
        pros: dto.pros,
        cons: dto.cons,
        image: dto.image,
      },
    })
  }

  async delete(id: number) {
    return this.prisma.task.delete({
      where: {
        id,
      },
    })
  }
}
