import { Prisma } from '@prisma/client'

export const returnAuthObject: Prisma.UserSelect = {
  id: true,
  email: true,
}
