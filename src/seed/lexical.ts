/**
 * Minimal helper for generating Payload-compatible Lexical JSON from a
 * block-based structure. Only the nodes we actually use in seed content
 * are supported: paragraphs, headings (h2/h3/h4), and bullet lists.
 *
 * Inline formatting markers in the source strings:
 *   **bold**   → bold text node
 *   *italic*   → italic text node
 */

export type InlineBlock = { type: 'p' | 'h2' | 'h3' | 'h4'; text: string }
export type ListBlock = { type: 'ul'; items: string[] }
export type Block = InlineBlock | ListBlock

const FORMAT_BOLD = 1
const FORMAT_ITALIC = 2

type LexicalText = {
  type: 'text'
  text: string
  format: number
  style: string
  mode: 'normal'
  detail: number
  version: number
}

function textNode(text: string, format = 0): LexicalText {
  return { type: 'text', text, format, style: '', mode: 'normal', detail: 0, version: 1 }
}

/**
 * Parse inline markers in `input`. Supports **bold** and *italic*.
 * The implementation is intentionally simple — no nesting of the same marker,
 * no escaping, and bold is resolved before italic so **foo** doesn't get
 * eaten by the italic rule.
 */
function parseInline(input: string): LexicalText[] {
  const nodes: LexicalText[] = []

  const pushPlain = (s: string) => {
    if (!s) return
    // Now split the plain run on *italic*
    const parts = s.split(/(\*[^*]+\*)/g)
    for (const part of parts) {
      if (!part) continue
      if (/^\*[^*]+\*$/.test(part)) {
        nodes.push(textNode(part.slice(1, -1), FORMAT_ITALIC))
      } else {
        nodes.push(textNode(part, 0))
      }
    }
  }

  const boldParts = input.split(/(\*\*[^*]+\*\*)/g)
  for (const part of boldParts) {
    if (!part) continue
    if (/^\*\*[^*]+\*\*$/.test(part)) {
      nodes.push(textNode(part.slice(2, -2), FORMAT_BOLD))
    } else {
      pushPlain(part)
    }
  }

  return nodes.length > 0 ? nodes : [textNode(input, 0)]
}

function paragraphNode(text: string) {
  return {
    type: 'paragraph',
    format: '',
    indent: 0,
    version: 1,
    direction: 'ltr' as const,
    textFormat: 0,
    textStyle: '',
    children: parseInline(text),
  }
}

function headingNode(tag: 'h2' | 'h3' | 'h4', text: string) {
  return {
    type: 'heading',
    tag,
    format: '',
    indent: 0,
    version: 1,
    direction: 'ltr' as const,
    children: parseInline(text),
  }
}

function listItemNode(text: string, value: number) {
  return {
    type: 'listitem',
    value,
    format: '',
    indent: 0,
    version: 1,
    direction: 'ltr' as const,
    children: parseInline(text),
  }
}

function listNode(items: string[]) {
  return {
    type: 'list',
    listType: 'bullet',
    tag: 'ul',
    start: 1,
    format: '',
    indent: 0,
    version: 1,
    direction: 'ltr' as const,
    children: items.map((item, i) => listItemNode(item, i + 1)),
  }
}

export function buildLexical(blocks: Block[]) {
  const children = blocks.map((b) => {
    switch (b.type) {
      case 'p':
        return paragraphNode(b.text)
      case 'h2':
      case 'h3':
      case 'h4':
        return headingNode(b.type, b.text)
      case 'ul':
        return listNode(b.items)
    }
  })

  return {
    root: {
      type: 'root',
      format: '',
      indent: 0,
      version: 1,
      direction: 'ltr' as const,
      children,
    },
  }
}
