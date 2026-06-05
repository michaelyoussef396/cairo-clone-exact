import { siteSettings } from './site'
import { homePage } from './home'
import { menuPage } from './menuPage'
import { banquetPackages } from './banquets'

// Singleton + page documents seeded by the migration. Extended as each page is
// transcribed from the source components.
export const singletonDocs: any[] = [siteSettings, homePage, menuPage]

export { banquetPackages }
