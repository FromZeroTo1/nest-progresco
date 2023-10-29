import { IsEmail, IsString } from 'class-validator'

export class ContactFormDto {
  @IsString()
  fullName: string

  @IsString()
  phone: string

  @IsEmail()
  email: string
}
