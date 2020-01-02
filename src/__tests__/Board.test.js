import React from 'react'
import renderer from 'react-test-renderer'

import Board from '../Game/Board'

describe('Board component', () => {
  it('should render a black chip in square 45', () => {
    const tree = renderer
      .create(<Board />)
      .toJSON()
    expect(tree.children[4].children[5].children[0].props.className).toBe('black-chip chip')
  })

  it('should render a black chip in square 54', () => {
    const tree = renderer
      .create(<Board />)
      .toJSON()
    expect(tree.children[5].children[4].children[0].props.className).toBe('black-chip chip')
  })

  it('should render a white chip in square 44', () => {
    const tree = renderer
      .create(<Board />)
      .toJSON()
    expect(tree.children[4].children[4].children[0].props.className).toBe('white-chip chip')
  })

  it('should render a white chip in square 55', () => {
    const tree = renderer
      .create(<Board />)
      .toJSON()
    expect(tree.children[5].children[5].children[0].props.className).toBe('white-chip chip')
  })
})
