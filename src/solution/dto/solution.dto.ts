import { IsOptional, IsString } from 'class-validator'

export class SolutionDto {
  @IsOptional()
  @IsString()
  name?: string

  @IsOptional()
  @IsString()
  image?: string
}
