import { defineCollection, z } from 'astro:content'

const servicesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    headerImage: z.string(),
    uspItems: z.array(
      z.object({
        text: z.string(),
      })
    ),
  }),
})

export const collections = {
  services: servicesCollection,
}
