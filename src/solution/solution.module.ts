import { Module } from '@nestjs/common'
import { SolutionController } from './solution.controller'
import { SolutionService } from './solution.service'
import { PrismaService } from 'src/prisma.service'

@Module({
  controllers: [SolutionController],
  providers: [SolutionService, PrismaService],
})
export class SolutionModule {}
