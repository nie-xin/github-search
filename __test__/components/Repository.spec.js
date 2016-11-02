import React from 'react'
import { shallow } from 'enzyme';
import Repository from '../../src/components/Repository'

describe('(Component) Repository', () => {
  let repository, props

  beforeEach(() => {
    props = {
      name: 'tester',
      url: 'test.com'
    }
    repository = shallow(<Repository {...props} />)
  })

  it('Should render Repository component', () => {
    expect(repository).toBeDefined()
  })

  it('Should render list item', () => {
    expect(repository.find('li')).toBeTruthy()
  })

  it('Should render a link', () => {
    expect(repository.find('a')).toBeTruthy()
  })
})

