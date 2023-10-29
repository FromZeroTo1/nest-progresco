import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { ContactFormModule } from './contact-form/contact-form.module'
import { FileModule } from './file/file.module'
import { PrismaService } from './prisma.service'
import { ServiceModule } from './service/service.module'
import { SolutionModule } from './solution/solution.module'
import { TaskModule } from './task/task.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    SolutionModule,
    AuthModule,
    TaskModule,
    FileModule,
    ServiceModule,
    ContactFormModule,
    ContactFormModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
