import { Link } from 'react-router-dom'
import { PortableText, type PortableTextComponents } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/react'

type Props = {
  value?: PortableTextBlock[]
  /** className for inline links (varies per page section). */
  linkClassName?: string
  /** className for bold spans. */
  strongClassName?: string
  /** className applied to each paragraph. */
  paragraphClassName?: string
}

/**
 * Renders migrated rich text, preserving inline links exactly as the original
 * copy used them: internal routes via react-router <Link>, external via <a>.
 * Styling is configurable so each call site matches the original classNames.
 */
export const PortableTextContent = ({
  value,
  linkClassName = 'text-egyptian-gold hover:underline',
  strongClassName = 'text-foreground',
  paragraphClassName,
}: Props) => {
  if (!value || value.length === 0) return null

  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) =>
        paragraphClassName ? <p className={paragraphClassName}>{children}</p> : <p>{children}</p>,
      accentNote: ({ children }) => <p className="text-sm italic text-accent">{children}</p>,
    },
    marks: {
      strong: ({ children }) => <strong className={strongClassName}>{children}</strong>,
      internalLink: ({ children, value: v }) => (
        <Link to={v?.href || '#'} className={linkClassName}>
          {children}
        </Link>
      ),
      link: ({ children, value: v }) => (
        <a
          href={v?.href || '#'}
          className={linkClassName}
          target={v?.openInNewTab ? '_blank' : undefined}
          rel={v?.openInNewTab ? 'noopener noreferrer' : undefined}
        >
          {children}
        </a>
      ),
    },
  }

  return <PortableText value={value} components={components} />
}
