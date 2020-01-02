import React from 'react'
import renderer from 'react-test-renderer'

import GameInfos from '../Game/GameInfos'

describe('GameInfos component', () => {
  it('should render an aside tag', () => {
    const tree = renderer
      .create(<GameInfos />)
      .toJSON()
    expect(tree.type).toBe('aside')
  })

  it('should render a div in the aside tag', () => {
    const tree = renderer
      .create(<GameInfos />)
      .toJSON()
    expect(tree.children[0].type).toBe('div')
  })

  it('should render a black chip in the div tag', () => {
    const tree = renderer
      .create(<GameInfos />)
      .toJSON()
    expect(tree.children[0].props.className).toBe('aside__chip black-chip chip')
  })

  it('should render a button in the aside tag', () => {
    const tree = renderer
      .create(<GameInfos />)
      .toJSON()
    expect(tree.children[1].type).toBe('button')
  })

  it('should render a button in the aside tag with content "passer"', () => {
    const tree = renderer
      .create(<GameInfos />)
      .toJSON()
    expect(tree.children[1].children[0]).toBe('passer')
  })
})
