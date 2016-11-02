import React from 'react'
import { shallow } from 'enzyme';
import Header from '../../src/components/Header'

describe('(Component) Header', () => {
  let header

  beforeEach(() => {
    header = shallow(<Header />)
  })

  it('Should render Header component', () => {
    expect(header.find(Header)).toBeTruthy()
  })

  it('Should render a title', () => {
    expect(header.find('h2')).toBeTruthy()
  })
})

