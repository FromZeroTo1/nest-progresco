import { Prisma } from '@prisma/client'

export const returnTaskObject: Prisma.TaskSelect = {
  id: true,
  name: true,
	pros: true,
	cons: true,
	image: true,
  createdAt: true,
}
