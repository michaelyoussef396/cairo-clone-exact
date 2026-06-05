import { createClient } from '@sanity/client'

// The `production` dataset is public (read-only published content needs no token).
// projectId/dataset are not secrets; env vars allow overriding per environment,
// with the known public values as fallbacks so reads work out of the box.
export const SANITY_PROJECT_ID = import.meta.env.VITE_SANITY_PROJECT_ID || 'm1t8egcx'
export const SANITY_DATASET = import.meta.env.VITE_SANITY_DATASET || 'production'
export const SANITY_API_VERSION = '2024-01-01'

export const sanityClient = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: SANITY_API_VERSION,
  useCdn: true,
})
