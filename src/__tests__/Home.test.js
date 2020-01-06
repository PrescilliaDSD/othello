import React from 'react'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'

import Home from '../components/Home'

describe('Root component', () => {
  it('should render correctly', () => {
    const component = renderer
      .create(<Home setLoggedIn={() => {}} gameData={{}} setGameData={() => {}} message={{}} setMessage={() => {}} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render a main tag', () => {
    const component = renderer
      .create(<Home setLoggedIn={() => {}} gameData={{}} setGameData={() => {}} message={{}} setMessage={() => {}} />)
    const tree = component.toJSON()
    expect(tree.type).toBe('main')
  })

  it('should render 6 children in the main tag', () => {
    const component = renderer
      .create(<Home setLoggedIn={() => {}} gameData={{}} setGameData={() => {}} message={{}} setMessage={() => {}} />)
    const tree = component.toJSON()
    expect(tree.children).toHaveLength(6)
  })

  it('should render h1, p, p, p, ul and ul in the main tag', () => {
    const component = renderer
      .create(<Home setLoggedIn={() => {}} gameData={{}} setGameData={() => {}} message={{}} setMessage={() => {}} />)
    const tree = component.toJSON()
    expect(tree.children[0].type).toBe('h1')
    expect(tree.children[1].type).toBe('p')
    expect(tree.children[2].type).toBe('p')
    expect(tree.children[3].type).toBe('ul')
    expect(tree.children[4].type).toBe('p')
    expect(tree.children[5].type).toBe('ul')
  })

  it('should render text "Jeu Othello" in the h1 tag', () => {
    const component = renderer
      .create(<Home setLoggedIn={() => {}} gameData={{}} setGameData={() => {}} message={{}} setMessage={() => {}} />)
    const tree = component.toJSON()
    expect(tree.children[0].children[0]).toBe('Jeu Othello')
  })

  it('should render a home actions list of two items', () => {
    const component = renderer
      .create(<Home setLoggedIn={() => {}} gameData={{}} setGameData={() => {}} message={{}} setMessage={() => {}} />)
    const tree = component.toJSON()
    expect(tree.children[3].children).toHaveLength(2)
  })
  it('should render two buttons "Créer une partie" & "Me déconnecter" in the home actions list if gameData is empty', () => {
    const component = renderer
      .create(<Home setLoggedIn={() => {}} gameData={{}} setGameData={() => {}} message={{}} setMessage={() => {}} />)
    const tree = component.toJSON()
    expect(tree.children[3].children[0].children[0].children[0]).toBe('Créer une partie')
    expect(tree.children[3].children[1].children[0].children[0]).toBe('Me déconnecter')
  })
  it('should render link "Accéder à la partie créée" & button "Me déconnecter" in the home actions list if gameData is not empty', () => {
    const component = renderer
      .create(<Router><Home setLoggedIn={() => {}} gameData={{ _id: '123' }} setGameData={() => {}} message={{}} setMessage={() => {}} /></Router>)
    const tree = component.toJSON()
    expect(tree.children[3].children[0].children[0].children[0]).toBe('Accéder à la partie créée')
    expect(tree.children[3].children[1].children[0].children[0]).toBe('Me déconnecter')
  })
})
