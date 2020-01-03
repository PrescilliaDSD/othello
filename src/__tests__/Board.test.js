import React from 'react'
import renderer from 'react-test-renderer'
import { render, fireEvent } from '@testing-library/react'
import { renderHook, act } from '@testing-library/react-hooks'
import Board from '../Game/Board'

describe('Board component initialization', () => {
  beforeAll(() => (
    jest.spyOn(React, 'useEffect').mockImplementation(React.useLayoutEffect)
  ))

  it('should render a black chip in square 45', () => {
    const tree = renderer
      .create(<Board currentPlayer={'black'} />)
      .toJSON()
    expect(tree.children[4].children[5].children[0].props.className).toBe('black-chip chip')
  })

  it('should render a black chip in square 54', () => {
    const tree = renderer
      .create(<Board currentPlayer={'black'} />)
      .toJSON()
    expect(tree.children[5].children[4].children[0].props.className).toBe('black-chip chip')
  })

  it('should render a white chip in square 44', () => {
    const tree = renderer
      .create(<Board currentPlayer={'black'} />)
      .toJSON()
    expect(tree.children[4].children[4].children[0].props.className).toBe('white-chip chip')
  })

  it('should render a white chip in square 55', () => {
    const tree = renderer
      .create(<Board currentPlayer={'black'} />)
      .toJSON()
    expect(tree.children[5].children[5].children[0].props.className).toBe('white-chip chip')
  })

  it('should render an available chip in square 34', () => {
    const tree = renderer
      .create(<Board currentPlayer={'black'} />)
      .toJSON()
    expect(tree.children[3].children[4].children[0].props.className).toBe('available-chip chip')
  })

  it('should render an available chip in square 43', () => {
    const tree = renderer
      .create(<Board currentPlayer={'black'} />)
      .toJSON()
    expect(tree.children[4].children[3].children[0].props.className).toBe('available-chip chip')
  })

  it('should render an available chip in square 56', () => {
    const tree = renderer
      .create(<Board currentPlayer={'black'} />)
      .toJSON()
    expect(tree.children[5].children[6].children[0].props.className).toBe('available-chip chip')
  })

  it('should render an available chip in square 65', () => {
    const tree = renderer
      .create(<Board currentPlayer={'black'} />)
      .toJSON()
    expect(tree.children[6].children[5].children[0].props.className).toBe('available-chip chip')
  })
})

// describe('Board component square availability', () => {
//   it('should render an available square on square 35 when currentPlayer is white and black clicked on square 34', () => {
//     const { getByTestId } = render(<Board currentPlayer='black' setCurrentPlayer={() => ('white')}/>)
//     const squareToClick = getByTestId('34')
//     const squareAvailable = getByTestId('35')
//     expect(squareAvailable.children[0].classList[0]).toEqual('no-chip')
//     fireEvent.click(squareToClick)
//     // const { result } = renderHook(() => Board({ currentPlayer: 'black', setCurrentPlayer: () => {} }))
//     // console.log(result.current)
//     expect(squareAvailable.children[0].classList[0]).toEqual('available-chip')
//   })
// })
