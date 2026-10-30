import { defineCollection, defineContentConfig } from '@nuxt/content'
import { productCardSchema } from './app/schemas/content'

export default defineContentConfig({
  collections: {
    product_cards_enCA: defineCollection({
      type: 'data',
      source: {
        include: 'en-CA/*products/**/*/card.yml',
        exclude: ['en-CA/*products/bn/**']
      },
      schema: productCardSchema
    }),
    docs_enCA: defineCollection({
      type: 'page',
      source: {
        include: '**',
        exclude: [
          '**/card.yml',
          '**/en-CA/*products/bn/**',
          '**/en-CA/*products/rs/registry-search.yaml'
        ]
      }
    })
  }
})
