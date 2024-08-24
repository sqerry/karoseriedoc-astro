import { defineCollection, z } from 'astro:content'

const servicesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    headerImage: z.string(),
    customClass: z.string().optional(),
    lang: z.string().optional(),
    uspItems: z
      .array(
        z.object({
          text: z.string(),
        })
      )
      .optional(),
  }),
})

export const collections = {
  services: servicesCollection,
}
