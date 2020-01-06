import React from 'react'
import { StaticRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Board from '../components/Game/Board'

Enzyme.configure({ adapter: new Adapter() })

describe('Board component initialization', () => {
  it('should render correctly', () => {
    const component = renderer
      .create(<StaticRouter params="123"><Board opponent='' setOpponent={() => {}} setBoard={() => {}} setLastPlayerPass={() => {}} setWhiteScore={() => {}} setBlackScore={() => {}} endGame={() => {}} player1='' player2='' status='' whiteScore={0} blackScore={0} lastPlayerPass='' board={[
        ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
        ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
        ['no', 'no', 'no', 'available', 'no', 'no', 'no', 'no'],
        ['no', 'no', 'available', 'white', 'black', 'no', 'no', 'no'],
        ['no', 'no', 'no', 'black', 'white', 'available', 'no', 'no'],
        ['no', 'no', 'no', 'no', 'available', 'no', 'no', 'no'],
        ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
        ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no']
      ]}
      currentPlayer={'black'} setCurrentPlayer={() => {}} /></StaticRouter>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should render a black chip in square 45', () => {
    const component = renderer
      .create(<StaticRouter params="123"><Board opponent='' setOpponent={() => {}} setBoard={() => {}} setLastPlayerPass={() => {}} setWhiteScore={() => {}} setBlackScore={() => {}} endGame={() => {}} player1='' player2='' status='' whiteScore={0} blackScore={0} lastPlayerPass='' board={[
        ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
        ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
        ['no', 'no', 'no', 'available', 'no', 'no', 'no', 'no'],
        ['no', 'no', 'available', 'white', 'black', 'no', 'no', 'no'],
        ['no', 'no', 'no', 'black', 'white', 'available', 'no', 'no'],
        ['no', 'no', 'no', 'no', 'available', 'no', 'no', 'no'],
        ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
        ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no']
      ]}
      currentPlayer={'black'} setCurrentPlayer={() => {}} /></StaticRouter>)
    const tree = component.toJSON()
    expect(tree.children[4].children[5].children[0].props.className).toBe('black-chip chip')
  })

  it('should render a black chip in square 54', () => {
    const component = renderer
      .create(<StaticRouter params="123"><Board opponent='' setOpponent={() => {}} setBoard={() => {}} setLastPlayerPass={() => {}} setWhiteScore={() => {}} setBlackScore={() => {}} endGame={() => {}} player1='' player2='' status='' whiteScore={0} blackScore={0} lastPlayerPass='' board={[
        ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
        ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
        ['no', 'no', 'no', 'available', 'no', 'no', 'no', 'no'],
        ['no', 'no', 'available', 'white', 'black', 'no', 'no', 'no'],
        ['no', 'no', 'no', 'black', 'white', 'available', 'no', 'no'],
        ['no', 'no', 'no', 'no', 'available', 'no', 'no', 'no'],
        ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
        ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no']
      ]}
      currentPlayer={'black'} setCurrentPlayer={() => {}} /></StaticRouter>)
    const tree = component.toJSON()
    expect(tree.children[5].children[4].children[0].props.className).toBe('black-chip chip')
  })

  it('should render a white chip in square 44', () => {
    const component = renderer
      .create(<StaticRouter params="123"><Board opponent='' setOpponent={() => {}} setBoard={() => {}} setLastPlayerPass={() => {}} setWhiteScore={() => {}} setBlackScore={() => {}} endGame={() => {}} player1='' player2='' status='' whiteScore={0} blackScore={0} lastPlayerPass='' board={[
        ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
        ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
        ['no', 'no', 'no', 'available', 'no', 'no', 'no', 'no'],
        ['no', 'no', 'available', 'white', 'black', 'no', 'no', 'no'],
        ['no', 'no', 'no', 'black', 'white', 'available', 'no', 'no'],
        ['no', 'no', 'no', 'no', 'available', 'no', 'no', 'no'],
        ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
        ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no']
      ]}
      currentPlayer={'black'} setCurrentPlayer={() => {}} /></StaticRouter>)
    const tree = component.toJSON()
    expect(tree.children[4].children[4].children[0].props.className).toBe('white-chip chip')
  })

  it('should render a white chip in square 55', () => {
    const component = renderer
      .create(<StaticRouter params="123"><Board opponent='' setOpponent={() => {}} setBoard={() => {}} setLastPlayerPass={() => {}} setWhiteScore={() => {}} setBlackScore={() => {}} endGame={() => {}} player1='' player2='' status='' whiteScore={0} blackScore={0} lastPlayerPass='' board={[
        ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
        ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
        ['no', 'no', 'no', 'available', 'no', 'no', 'no', 'no'],
        ['no', 'no', 'available', 'white', 'black', 'no', 'no', 'no'],
        ['no', 'no', 'no', 'black', 'white', 'available', 'no', 'no'],
        ['no', 'no', 'no', 'no', 'available', 'no', 'no', 'no'],
        ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
        ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no']
      ]}
      currentPlayer={'black'} setCurrentPlayer={() => {}} /></StaticRouter>)
    const tree = component.toJSON()
    expect(tree.children[5].children[5].children[0].props.className).toBe('white-chip chip')
  })

  it('should render an available chip in square 34', () => {
    const component = renderer
      .create(<StaticRouter params="123"><Board opponent='' setOpponent={() => {}} setBoard={() => {}} setLastPlayerPass={() => {}} setWhiteScore={() => {}} setBlackScore={() => {}} endGame={() => {}} player1='' player2='' status='' whiteScore={0} blackScore={0} lastPlayerPass='' board={[
        ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
        ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
        ['no', 'no', 'no', 'available', 'no', 'no', 'no', 'no'],
        ['no', 'no', 'available', 'white', 'black', 'no', 'no', 'no'],
        ['no', 'no', 'no', 'black', 'white', 'available', 'no', 'no'],
        ['no', 'no', 'no', 'no', 'available', 'no', 'no', 'no'],
        ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
        ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no']
      ]}
      currentPlayer={'black'} setCurrentPlayer={() => {}} /></StaticRouter>)
    const tree = component.toJSON()
    expect(tree.children[3].children[4].children[0].props.className).toBe('available-chip chip')
  })

  it('should render an available chip in square 43', () => {
    const component = renderer
      .create(<StaticRouter params="123"><Board opponent='' setOpponent={() => {}} setBoard={() => {}} setLastPlayerPass={() => {}} setWhiteScore={() => {}} setBlackScore={() => {}} endGame={() => {}} player1='' player2='' status='' whiteScore={0} blackScore={0} lastPlayerPass='' board={[
        ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
        ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
        ['no', 'no', 'no', 'available', 'no', 'no', 'no', 'no'],
        ['no', 'no', 'available', 'white', 'black', 'no', 'no', 'no'],
        ['no', 'no', 'no', 'black', 'white', 'available', 'no', 'no'],
        ['no', 'no', 'no', 'no', 'available', 'no', 'no', 'no'],
        ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
        ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no']
      ]}
      currentPlayer={'black'} setCurrentPlayer={() => {}} /></StaticRouter>)
    const tree = component.toJSON()
    expect(tree.children[4].children[3].children[0].props.className).toBe('available-chip chip')
  })

  it('should render an available chip in square 56', () => {
    const component = renderer
      .create(<StaticRouter params="123"><Board opponent='' setOpponent={() => {}} setBoard={() => {}} setLastPlayerPass={() => {}} setWhiteScore={() => {}} setBlackScore={() => {}} endGame={() => {}} player1='' player2='' status='' whiteScore={0} blackScore={0} lastPlayerPass='' board={[
        ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
        ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
        ['no', 'no', 'no', 'available', 'no', 'no', 'no', 'no'],
        ['no', 'no', 'available', 'white', 'black', 'no', 'no', 'no'],
        ['no', 'no', 'no', 'black', 'white', 'available', 'no', 'no'],
        ['no', 'no', 'no', 'no', 'available', 'no', 'no', 'no'],
        ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
        ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no']
      ]}
      currentPlayer={'black'} setCurrentPlayer={() => {}} /></StaticRouter>)
    const tree = component.toJSON()
    expect(tree.children[5].children[6].children[0].props.className).toBe('available-chip chip')
  })

  it('should render an available chip in square 65', () => {
    const component = renderer
      .create(<StaticRouter params="123"><Board opponent='' setOpponent={() => {}} setBoard={() => {}} setLastPlayerPass={() => {}} setWhiteScore={() => {}} setBlackScore={() => {}} endGame={() => {}} player1='' player2='' status='' whiteScore={0} blackScore={0} lastPlayerPass='' board={[
        ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
        ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
        ['no', 'no', 'no', 'available', 'no', 'no', 'no', 'no'],
        ['no', 'no', 'available', 'white', 'black', 'no', 'no', 'no'],
        ['no', 'no', 'no', 'black', 'white', 'available', 'no', 'no'],
        ['no', 'no', 'no', 'no', 'available', 'no', 'no', 'no'],
        ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
        ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no']
      ]}
      currentPlayer={'black'} setCurrentPlayer={() => {}} /></StaticRouter>)
    const tree = component.toJSON()
    expect(tree.children[6].children[5].children[0].props.className).toBe('available-chip chip')
  })
})
