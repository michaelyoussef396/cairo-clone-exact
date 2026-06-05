import type { StructureBuilder, StructureResolver } from 'sanity/structure'
import type { ComponentType } from 'react'
import {
  CogIcon,
  HomeIcon,
  RestaurantIcon,
  UsersIcon,
  CalendarIcon,
  PinIcon,
  CaseIcon,
  EnvelopeIcon,
  WarningOutlineIcon,
  TagIcon,
} from '@sanity/icons'

// Singleton documents are edited as a single fixed-id document, so they are
// excluded from the generic document-type lists below.
const SINGLETONS = [
  'siteSettings',
  'homePage',
  'menuPage',
  'aboutPage',
  'eventsPage',
  'locationPage',
  'functionRoomPage',
  'contactPage',
  'notFoundPage',
]

function singleton(
  S: StructureBuilder,
  typeName: string,
  title: string,
  icon: ComponentType,
) {
  return S.listItem()
    .title(title)
    .id(typeName)
    .icon(icon)
    .child(S.document().schemaType(typeName).documentId(typeName).title(title))
}

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Cairo By Nights')
    .items([
      singleton(S, 'siteSettings', 'Site Settings', CogIcon),
      S.divider(),

      // Menu
      S.listItem()
        .title('Menu')
        .icon(RestaurantIcon)
        .child(
          S.list()
            .title('Menu')
            .items([
              S.documentTypeListItem('menuCategory').title('Categories').icon(TagIcon),
              S.documentTypeListItem('menuItem').title('Items').icon(RestaurantIcon),
              S.documentTypeListItem('banquetPackage').title('Banquet packages').icon(UsersIcon),
            ]),
        ),
      S.divider(),

      // Pages
      S.listItem()
        .title('Pages')
        .icon(HomeIcon)
        .child(
          S.list()
            .title('Pages')
            .items([
              singleton(S, 'homePage', 'Home', HomeIcon),
              singleton(S, 'menuPage', 'Menu page', RestaurantIcon),
              singleton(S, 'aboutPage', 'About', UsersIcon),
              singleton(S, 'eventsPage', 'Events', CalendarIcon),
              singleton(S, 'locationPage', 'Location', PinIcon),
              singleton(S, 'functionRoomPage', 'Function Room', CaseIcon),
              singleton(S, 'contactPage', 'Contact', EnvelopeIcon),
              singleton(S, 'notFoundPage', '404', WarningOutlineIcon),
            ]),
        ),

      S.divider(),

      // Anything not explicitly placed above (and not a singleton)
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![...SINGLETONS, 'menuCategory', 'menuItem', 'banquetPackage'].includes(
            listItem.getId() as string,
          ),
      ),
    ])
