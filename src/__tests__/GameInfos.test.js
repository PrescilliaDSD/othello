import React from 'react'
import renderer from 'react-test-renderer'

import GameInfos from '../components/Game/GameInfos'

describe('GameInfos component', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<GameInfos currentPlayer='black' setCurrentPlayer={() => {}} opponent='white' setOpponent={() => {}} board={[]} lastPlayerPass='none' setLastPlayerPass={() => {}} whiteScore={2} blackScore={2} endGame={() => {}} endMsg='' player1='' player2='' />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render an aside tag', () => {
    const tree = renderer
      .create(<GameInfos currentPlayer='black' setCurrentPlayer={() => {}} opponent='white' setOpponent={() => {}} board={[]} lastPlayerPass='none' setLastPlayerPass={() => {}} whiteScore={2} blackScore={2} endGame={() => {}} endMsg='' player1='' player2='' />)
      .toJSON()
    expect(tree.type).toBe('aside')
  })

  it('should render 5 children is the aside tag', () => {
    const tree = renderer
      .create(<GameInfos currentPlayer='black' setCurrentPlayer={() => {}} opponent='white' setOpponent={() => {}} board={[]} lastPlayerPass='none' setLastPlayerPass={() => {}} whiteScore={2} blackScore={2} endGame={() => {}} endMsg='' player1='' player2='' />)
      .toJSON()
    expect(tree.children).toHaveLength(5)
  })

  it('should render div, ul, p, div, button in the aside tag', () => {
    const tree = renderer
      .create(<GameInfos currentPlayer='black' setCurrentPlayer={() => {}} opponent='white' setOpponent={() => {}} board={[]} lastPlayerPass='none' setLastPlayerPass={() => {}} whiteScore={2} blackScore={2} endGame={() => {}} endMsg='' player1='' player2='' />)
      .toJSON()
    expect(tree.children[0].type).toBe('div')
    expect(tree.children[1].type).toBe('p')
    expect(tree.children[2].type).toBe('ul')
    expect(tree.children[3].type).toBe('div')
    expect(tree.children[4].type).toBe('button')
  })

  it('should render two children in the ul tag', () => {
    const tree = renderer
      .create(<GameInfos currentPlayer='black' setCurrentPlayer={() => {}} opponent='white' setOpponent={() => {}} board={[]} lastPlayerPass='none' setLastPlayerPass={() => {}} whiteScore={2} blackScore={2} endGame={() => {}} endMsg='' player1='' player2='' />)
      .toJSON()
    expect(tree.children[2].children).toHaveLength(2)
  })

  it('should render a black chip in the first children of the ul tag', () => {
    const tree = renderer
      .create(<GameInfos currentPlayer='black' setCurrentPlayer={() => {}} opponent='white' setOpponent={() => {}} board={[]} lastPlayerPass='none' setLastPlayerPass={() => {}} whiteScore={2} blackScore={2} endGame={() => {}} endMsg='' player1='' player2='' />)
      .toJSON()
    expect(tree.children[2].children[0].children[2].props.className).toBe('aside__chip black-chip chip')
  })

  it('should render the initial black score (2) in the black chip of the ul tag', () => {
    const tree = renderer
      .create(<GameInfos currentPlayer='black' setCurrentPlayer={() => {}} opponent='white' setOpponent={() => {}} board={[]} lastPlayerPass='none' setLastPlayerPass={() => {}} whiteScore={2} blackScore={2} endGame={() => {}} endMsg='' player1='' player2='' />)
      .toJSON()
    expect(tree.children[2].children[0].children[2].children[0].children[0]).toBe('2')
  })

  it('should render a white chip in the second children of the ul tag', () => {
    const tree = renderer
      .create(<GameInfos currentPlayer='black' setCurrentPlayer={() => {}} opponent='white' setOpponent={() => {}} board={[]} lastPlayerPass='none' setLastPlayerPass={() => {}} whiteScore={2} blackScore={2} endGame={() => {}} endMsg='' player1='' player2='' />)
      .toJSON()
    expect(tree.children[2].children[1].children[2].props.className).toBe('aside__chip white-chip chip')
  })

  it('should render the initial white score (2) in the white chip of the ul tag', () => {
    const tree = renderer
      .create(<GameInfos currentPlayer='black' setCurrentPlayer={() => {}} opponent='white' setOpponent={() => {}} board={[]} lastPlayerPass='none' setLastPlayerPass={() => {}} whiteScore={2} blackScore={2} endGame={() => {}} endMsg='' player1='' player2='' />)
      .toJSON()
    expect(tree.children[2].children[1].children[2].children[0].children[0]).toBe('2')
  })

  it('should render a black chip in the second div tag', () => {
    const tree = renderer
      .create(<GameInfos currentPlayer='black' setCurrentPlayer={() => {}} opponent='white' setOpponent={() => {}} board={[]} lastPlayerPass='none' setLastPlayerPass={() => {}} whiteScore={2} blackScore={2} endGame={() => {}} endMsg='' player1='' player2='' />)
      .toJSON()
    expect(tree.children[3].children[1].props.className).toBe('aside__chip black-chip chip')
  })

  it('should render a button in the aside tag with content "passer"', () => {
    const tree = renderer
      .create(<GameInfos currentPlayer='black' setCurrentPlayer={() => {}} opponent='white' setOpponent={() => {}} board={[]} lastPlayerPass='none' setLastPlayerPass={() => {}} whiteScore={2} blackScore={2} endGame={() => {}} endMsg='' player1='' player2='' />)
      .toJSON()
    expect(tree.children[4].children[0]).toBe('passer')
  })

  it('should render a black chip if player 1 is active', () => {
    const tree = renderer
      .create(<GameInfos currentPlayer='black' setCurrentPlayer={() => {}} opponent='white' setOpponent={() => {}} board={[]} lastPlayerPass='none' setLastPlayerPass={() => {}} whiteScore={2} blackScore={2} endGame={() => {}} endMsg='' player1='' player2='' />)
      .toJSON()
    expect(tree.children[3].children[1].props.className).toBe('aside__chip black-chip chip')
  })

  it('should render a white chip if player 2 is active', () => {
    const tree = renderer
      .create(<GameInfos currentPlayer='white' setCurrentPlayer={() => {}} opponent='black' setOpponent={() => {}} board={[]} lastPlayerPass='none' setLastPlayerPass={() => {}} whiteScore={2} blackScore={2} endGame={() => {}} endMsg='' player1='' player2='' />)
      .toJSON()
    expect(tree.children[3].children[1].props.className).toBe('aside__chip white-chip chip')
  })
})
