import React from 'react'
import renderer from 'react-test-renderer'

import SignUpSignIn from '../components/SignUpSignIn'

describe('SignUpSignIn component', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<SignUpSignIn setLoggedIn={() => {}} message={{}} setMessage={() => {}} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render a main tag', () => {
    const tree = renderer
      .create(<SignUpSignIn setLoggedIn={() => {}} message={{}} setMessage={() => {}} />)
      .toJSON()
    expect(tree.type).toBe('main')
  })

  it('should render 3 children in the main tag', () => {
    const tree = renderer
      .create(<SignUpSignIn setLoggedIn={() => {}} message={{}} setMessage={() => {}} />)
      .toJSON()
    expect(tree.children).toHaveLength(3)
  })
  it('should render h1, p & div in the main tag', () => {
    const tree = renderer
      .create(<SignUpSignIn setLoggedIn={() => {}} message={{}} setMessage={() => {}} />)
      .toJSON()
    expect(tree.children[0].type).toBe('h1')
    expect(tree.children[1].type).toBe('p')
    expect(tree.children[2].type).toBe('div')
  })
  it('should render content "Bienvenue sur ce jeu Othello !" in the title', () => {
    const tree = renderer
      .create(<SignUpSignIn setLoggedIn={() => {}} message={{}} setMessage={() => {}} />)
      .toJSON()
    expect(tree.children[0].children[0]).toBe('Bienvenue sur ce jeu Othello !')
  })

  it('should render a section with "S\'inscrire" as a title', () => {
    const tree = renderer
      .create(<SignUpSignIn setLoggedIn={() => {}} message={{}} setMessage={() => {}} />)
      .toJSON()
    expect(tree.children[2].children[0].children[0].children[0]).toBe('S\'inscrire')
  })
  it('should render a section with "Se connecter" as a title', () => {
    const tree = renderer
      .create(<SignUpSignIn setLoggedIn={() => {}} message={{}} setMessage={() => {}} />)
      .toJSON()
    expect(tree.children[2].children[1].children[0].children[0]).toBe('Se connecter')
  })
})
