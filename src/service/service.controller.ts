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
import { ServiceDto } from './dto/service.dto'
import { ServiceService } from './service.service'

@Controller('services')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Get()
  async getAll() {
    return this.serviceService.getAll()
  }

  // Admin

  @Get(':id')
  @Auth('admin')
  async getById(@Param('id') id: string) {
    return this.serviceService.byId(+id)
  }

  @HttpCode(200)
  @Post()
  @Auth('admin')
  async create() {
    return this.serviceService.create()
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put(':id')
  @Auth('admin')
  async update(@Param('id') id: string, @Body() dto: ServiceDto) {
    return this.serviceService.update(+id, dto)
  }

  @HttpCode(200)
  @Delete(':id')
  @Auth('admin')
  async delete(@Param('id') id: string) {
    return this.serviceService.delete(+id)
  }
}
