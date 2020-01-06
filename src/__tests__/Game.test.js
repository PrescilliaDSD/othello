import React from 'react'
import renderer from 'react-test-renderer'
import { StaticRouter } from 'react-router-dom'

import Game from '../components/Game/index'

describe('Game component', () => {
  it('should render correctly', () => {
    const component = renderer.create(
      <StaticRouter params="123">
        <Game />
      </StaticRouter>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render a main tag', () => {
    const component = renderer.create(
      <StaticRouter params="123">
        <Game />
      </StaticRouter>
    )
    const tree = component.toJSON()
    expect(tree.type).toBe('main')
  })

  // it('should render a title in the main tag', () => {
  //   const component = renderer.create(
  //     <StaticRouter params="123">
  //       <Game />
  //     </StaticRouter>
  //   )
  //   const tree = component.toJSON()
  //   expect(tree.children[0].type).toBe('h1')
  // })

  // it('should render a title with content : "Othello"', () => {
  //   const tree = renderer
  //     .create(<Game />)
  //     .toJSON()
  //   expect(tree.children[0].children[0]).toBe('Othello')
  // })
})
