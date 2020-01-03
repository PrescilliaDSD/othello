import React from 'react'
import renderer from 'react-test-renderer'
import { render, fireEvent, getByTestId } from '@testing-library/react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Board from '../Game/Board'

Enzyme.configure({ adapter: new Adapter() });

describe('Board component initialization', () => {
  it('should render a black chip in square 45', () => {
    const tree = renderer
      .create(<Board currentPlayer={'black'} setCurrentPlayer={() => {}} />)
      .toJSON()
    expect(tree.children[4].children[5].children[0].props.className).toBe('black-chip chip')
  })

  it('should render a black chip in square 54', () => {
    const tree = renderer
      .create(<Board currentPlayer={'black'} setCurrentPlayer={() => {}} />)
      .toJSON()
    expect(tree.children[5].children[4].children[0].props.className).toBe('black-chip chip')
  })

  it('should render a white chip in square 44', () => {
    const tree = renderer
      .create(<Board currentPlayer={'black'} setCurrentPlayer={() => {}} />)
      .toJSON()
    expect(tree.children[4].children[4].children[0].props.className).toBe('white-chip chip')
  })

  it('should render a white chip in square 55', () => {
    const tree = renderer
      .create(<Board currentPlayer={'black'} setCurrentPlayer={() => {}} />)
      .toJSON()
    expect(tree.children[5].children[5].children[0].props.className).toBe('white-chip chip')
  })

  it('should render an available chip in square 34', () => {
    const tree = renderer
      .create(<Board currentPlayer={'black'} setCurrentPlayer={() => {}} />)
      .toJSON()
    expect(tree.children[3].children[4].children[0].props.className).toBe('available-chip chip')
  })

  it('should render an available chip in square 43', () => {
    const tree = renderer
      .create(<Board currentPlayer={'black'} setCurrentPlayer={() => {}} />)
      .toJSON()
    expect(tree.children[4].children[3].children[0].props.className).toBe('available-chip chip')
  })

  it('should render an available chip in square 56', () => {
    const tree = renderer
      .create(<Board currentPlayer={'black'} setCurrentPlayer={() => {}} />)
      .toJSON()
    expect(tree.children[5].children[6].children[0].props.className).toBe('available-chip chip')
  })

  it('should render an available chip in square 65', () => {
    const tree = renderer
      .create(<Board currentPlayer={'black'} setCurrentPlayer={() => {}} />)
      .toJSON()
    expect(tree.children[6].children[5].children[0].props.className).toBe('available-chip chip')
  })
})

describe('Board component square availability', () => {
  it('should render an available square on square 35 when currentPlayer is white and black clicked on square 34', () => {
    // const addChip = jest.fn()
    // const setState = jest.fn()
    // const useStateSpy = jest.spyOn(React, 'useState')
    // useStateSpy.mockImplementation((init) => [init, setState])
    // const wrapper = Enzyme.shallow(<Board addChip={addChip} />)
    // console.log(wrapper.props().children.props.children[1][2].props.children[1][3].props.onClick())
    // wrapper.find('#34').props().onClick()

    // expect(setState).toHaveBeenCalledWith('white')
    // const squareToClick = getByTestId('34')
    // const squareAvailable = getByTestId('35')
    // const addChip = jest.fn()
    // let currentPlayer = 'black'
    // const setCurrentPlayer = () => { currentPlayer = 'white' }
    // const { container } = render(<Board addChip={addChip} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} />)
    // const squareAvailable = getByTestId(container, '35')
    // expect(squareAvailable.children[0].classList[0]).toBe('no-chip')
    // const squareToClick = getByTestId(container, '34')
    // fireEvent.click(squareToClick)
    // console.log(squareAvailable.children[0].classList[0])
  })
})
