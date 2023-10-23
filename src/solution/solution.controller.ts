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
import { SolutionDto } from './dto/solution.dto'
import { SolutionService } from './solution.service'

@Controller('solutions')
export class SolutionController {
  constructor(private readonly solutionService: SolutionService) {}

  @UsePipes(new ValidationPipe())
  @Get()
  async getAll() {
    return this.solutionService.getAll()
  }


  // Admin

  @Get(':id')
  @Auth('admin')
  async getById(@Param('id') id: string) {
    return this.solutionService.byId(+id)
  }

  @HttpCode(200)
  @Post()
  @Auth('admin')
  async create() {
    return this.solutionService.create()
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put(':id')
  @Auth('admin')
  async update(@Param('id') id: string, @Body() dto: SolutionDto) {
    return this.solutionService.update(+id, dto)
  }

  @HttpCode(200)
  @Delete(':id')
  @Auth('admin')
  async delete(@Param('id') id: string) {
    return this.solutionService.delete(+id)
  }
}
