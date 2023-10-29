import { IsOptional, IsString } from 'class-validator'

export class ServiceDto {
  @IsString()
  name: string

  @IsOptional()
  @IsString()
  description?: string

  @IsOptional()
  @IsString()
  mobileDescription?: string

  @IsString()
  image: string
}