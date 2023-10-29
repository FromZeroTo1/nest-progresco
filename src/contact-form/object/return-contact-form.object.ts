import { Prisma } from '@prisma/client'

export const returnContactFormObject: Prisma.ContactFormSelect = {
  id: true,
  fullName: true,
  phone: true,
	email: true,
  createdAt: true,
}
