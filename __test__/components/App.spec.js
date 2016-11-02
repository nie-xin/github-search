import React from 'react'
import { shallow } from 'enzyme';
import App from '../../src/components/App'

describe('(Component) App', () => {
  it('Should render App component', () => {
    const app = shallow(<App />)
    expect(app.find(App)).toBeTruthy()
  })
})
