import React from 'react'
import renderer from 'react-test-renderer'
import { fireEvent } from '@testing-library/react'
import Board from '../Game/Board'

describe('Board component', () => {
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

  // it('should render an available chip in square 36', () => {
  //   const tree = renderer
  //     .create(<Board currentPlayer={'black'} board={[
  //       ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
  //       ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
  //       ['no', 'no', 'no', 'available', 'no', 'no', 'no', 'no'],
  //       ['no', 'no', 'available', 'white', 'black', 'white', 'no', 'no'],
  //       ['no', 'no', 'no', 'black', 'white', 'black', 'no', 'no'],
  //       ['no', 'no', 'no', 'no', 'available', 'no', 'no', 'no'],
  //       ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
  //       ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no']
  //     ]} />)
  //   const testInstance = tree.root
  //   const toClick = testInstance.findByProps({ id: '34' })
  //   console.log(toClick.props.onClick())
    // const test = tree.children[3].children[4].children[0]
    // console.log(test)
    // expect(tree.children[3].children[6].children[0].props.className).toBe('no-chip chip')

    // expect(tree.children[3].children[6].children[0].props.className).toBe('available-chip chip')
  // })
})
