import React from 'react'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'

import NotFound from '../components/NotFound'

describe('NotFound component', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<Router><NotFound /></Router>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render a main tag', () => {
    const tree = renderer
      .create(<Router><NotFound /></Router>)
      .toJSON()
    expect(tree.type).toBe('main')
  })

  it('should render a p tag in the main tag', () => {
    const tree = renderer
      .create(<Router><NotFound /></Router>)
      .toJSON()
    expect(tree.children[0].type).toBe('p')
  })
  it('should render content \'Oups ! Je crois que tu es perdu.\' in the p tag', () => {
    const tree = renderer
      .create(<Router><NotFound /></Router>)
      .toJSON()
    expect(tree.children[0].children[0]).toBe('Oups ! Je crois que tu es perdu.')
  })
  it('should render a link', () => {
    const tree = renderer
      .create(<Router><NotFound /></Router>)
      .toJSON()
    expect(tree.children[1].type).toBe('a')
  })

  it('should render a link to the home page', () => {
    const tree = renderer
      .create(<Router><NotFound /></Router>)
      .toJSON()
    expect(tree.children[1].props.href).toBe('/')
  })

  it('should render a link with content \'Retourner sur la page d\'accueil\' ', () => {
    const tree = renderer
      .create(<Router><NotFound /></Router>)
      .toJSON()
    expect(tree.children[1].children[0]).toBe('Retourner sur la page d\'accueil')
  })
})
