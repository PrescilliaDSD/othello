import React from 'react'
import renderer from 'react-test-renderer'
import Enzyme, { mount } from 'enzyme'
import { MemoryRouter } from 'react-router'
import Adapter from 'enzyme-adapter-react-16'

import App from '../components/App'
import SignUpSignIn from '../components/SignUpSignIn'

Enzyme.configure({ adapter: new Adapter() })

describe('Root component', () => {
  it('should render correctly', () => {
    const component = renderer
      .create(<App />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render SignUpSignIn component by default', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <App/>
      </MemoryRouter>
    )
    expect(wrapper.find(SignUpSignIn)).toHaveLength(1)
  })
})
