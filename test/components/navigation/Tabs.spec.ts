import { describe, it, expect } from 'vitest'
import { UTabs } from '#components'
import type { TypeOf } from 'zod'
import ComponentRender from '../component-render'

describe('Tabs', () => {
  it.each([
    ['basic case', {}],
    ['with orientation', { props: { orientation: 'vertical' } }],
    ['with items', { props: { items: [{ label: 'Item 1' }, { label: 'Item 2' }] } }],
    ['with default slot', { slots: { default: () => 'Default slot' }, props: { items: [{ label: 'Item 1' }, { label: 'Item 2' }] } }]
    // @ts-ignore
  ])('renders %s correctly', async (nameOrHtml: string, options: TypeOf<typeof UTabs.props>) => {
    const html = await ComponentRender(nameOrHtml, options, UTabs)
    expect(html).toMatchSnapshot()
  })
})