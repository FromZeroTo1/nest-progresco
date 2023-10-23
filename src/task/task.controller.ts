import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { TaskDto } from './dto/task.dto'
import { TaskService } from './task.service'

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @UsePipes(new ValidationPipe())
  @Get()
  async getAll() {
    return this.taskService.getAll()
  }

  // Admin

  @Get(':id')
  @Auth('admin')
  async getById(@Param('id') id: string) {
    return this.taskService.byId(+id)
  }

  @HttpCode(200)
  @Post()
  @Auth('admin')
  async create() {
    return this.taskService.create()
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put(':id')
  @Auth('admin')
  async update(@Param('id') id: string, @Body() dto: TaskDto) {
    return this.taskService.update(+id, dto)
  }

  @HttpCode(200)
  @Delete(':id')
  @Auth('admin')
  async delete(@Param('id') id: string) {
    return this.taskService.delete(+id)
  }
}
