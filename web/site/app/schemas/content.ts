import { z } from 'zod'

export const productCardSchema = z.object({
  name: z.string(),
  description: z.string(),
  badge: z.string(),
  bulletPoints: z.array(z.string())
})
