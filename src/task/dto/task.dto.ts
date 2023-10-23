import { IsOptional, IsString } from 'class-validator'

export class TaskDto {
  @IsOptional()
  @IsString()
  name?: string

  @IsOptional()
  @IsString()
  pros?: string

  @IsOptional()
  @IsString()
  cons?: string

  @IsOptional()
  @IsString()
  image?: string
}
