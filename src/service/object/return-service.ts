import { Prisma } from '@prisma/client'

export const returnServiceObject: Prisma.ServiceSelect = {
  id: true,
  name: true,
  description: true,
  mobileDescription: true,
  image: true,
  createdAt: true,
}
