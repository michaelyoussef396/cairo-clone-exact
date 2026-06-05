import { siteSettings } from './site'
import { homePage } from './home'
import { menuPage } from './menuPage'
import { aboutPage } from './about'
import { eventsPage } from './events'
import { locationPage } from './location'
import { functionRoomPage } from './functionRoom'
import { contactPage } from './contact'
import { notFoundPage } from './notFound'
import { banquetPackages } from './banquets'

// Singleton + page documents seeded by the migration.
export const singletonDocs: any[] = [
  siteSettings,
  homePage,
  menuPage,
  aboutPage,
  eventsPage,
  locationPage,
  functionRoomPage,
  contactPage,
  notFoundPage,
]

export { banquetPackages }
