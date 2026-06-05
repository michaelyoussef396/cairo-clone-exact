/**
 * Minimal markdown -> Portable Text converter for the migration.
 *
 * Supports exactly what the current site copy uses:
 *  - paragraphs separated by a blank line ("\n\n")
 *  - inline links: [text](/path) -> internalLink, [text](https://...) -> link
 *  - bold: **text** -> strong decorator
 *
 * Keys are deterministic (counter-based) so re-running the migration produces
 * identical documents and a clean readback diff.
 */

type Span = { _type: 'span'; _key: string; text: string; marks: string[] }
type MarkDef =
  | { _type: 'internalLink'; _key: string; href: string }
  | { _type: 'link'; _key: string; href: string; openInNewTab?: boolean }
type Block = {
  _type: 'block'
  _key: string
  style: string
  markDefs: MarkDef[]
  children: Span[]
}

let counter = 0
const key = () => `k${(counter++).toString(36)}`

/** Reset the key counter so each document starts from a stable baseline. */
export function resetKeys() {
  counter = 0
}

const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g
const BOLD_RE = /\*\*([^*]+)\*\*/g

type Token = { text: string; link?: string; bold?: boolean }

function tokenize(line: string): Token[] {
  // First split out links, then bold within the non-link segments.
  const tokens: Token[] = []
  let lastIndex = 0
  let m: RegExpExecArray | null
  LINK_RE.lastIndex = 0
  while ((m = LINK_RE.exec(line)) !== null) {
    if (m.index > lastIndex) tokens.push(...splitBold(line.slice(lastIndex, m.index)))
    tokens.push({ text: m[1], link: m[2] })
    lastIndex = m.index + m[0].length
  }
  if (lastIndex < line.length) tokens.push(...splitBold(line.slice(lastIndex)))
  return tokens
}

function splitBold(text: string): Token[] {
  const tokens: Token[] = []
  let lastIndex = 0
  let m: RegExpExecArray | null
  BOLD_RE.lastIndex = 0
  while ((m = BOLD_RE.exec(text)) !== null) {
    if (m.index > lastIndex) tokens.push({ text: text.slice(lastIndex, m.index) })
    tokens.push({ text: m[1], bold: true })
    lastIndex = m.index + m[0].length
  }
  if (lastIndex < text.length) tokens.push({ text: text.slice(lastIndex) })
  return tokens
}

function block(line: string, style = 'normal'): Block {
  const markDefs: MarkDef[] = []
  const children: Span[] = tokenize(line).map((tok) => {
    const marks: string[] = []
    if (tok.bold) marks.push('strong')
    if (tok.link) {
      const defKey = key()
      const isInternal = tok.link.startsWith('/') || tok.link.startsWith('#')
      markDefs.push(
        isInternal
          ? { _type: 'internalLink', _key: defKey, href: tok.link }
          : { _type: 'link', _key: defKey, href: tok.link, openInNewTab: true },
      )
      marks.push(defKey)
    }
    return { _type: 'span', _key: key(), text: tok.text, marks }
  })
  if (children.length === 0) {
    children.push({ _type: 'span', _key: key(), text: '', marks: [] })
  }
  return { _type: 'block', _key: key(), style, markDefs, children }
}

/** Build a single Portable Text block with an explicit style. */
export function ptBlock(text: string, style = 'normal'): Block {
  return block(text, style)
}

/** Convert a markdown-ish string into an array of Portable Text blocks. */
export function pt(markdown: string): Block[] {
  return markdown
    .split('\n\n')
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p) => block(p))
}
