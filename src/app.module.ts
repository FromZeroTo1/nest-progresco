import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { PrismaService } from './prisma.service'
import { SolutionModule } from './solution/solution.module'
import { TaskModule } from './task/task.module';
import { FileModule } from './file/file.module';

@Module({
  imports: [ConfigModule.forRoot(), SolutionModule, AuthModule, TaskModule, FileModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
