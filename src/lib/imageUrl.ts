import imageUrlBuilder from '@sanity/image-url'
import { sanityClient } from './sanity'

const builder = imageUrlBuilder(sanityClient)

type ImageSource = Parameters<typeof builder.image>[0]

export const urlFor = (source: ImageSource) => builder.image(source)
