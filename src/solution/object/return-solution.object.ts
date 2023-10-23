import { Prisma } from '@prisma/client'

export const returnSolutionObject: Prisma.SolutionSelect = {
  id: true,
  name: true,
  image: true,
  createdAt: true,
}
