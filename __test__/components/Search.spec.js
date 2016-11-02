import React from 'react'
import { shallow } from 'enzyme';
import Search from '../../src/components/Search'

describe('(Component) Search', () => {
  let search, props, searchChange, searchSubmit

  beforeEach(() => {
    searchChange = jest.fn()
    searchSubmit = jest.fn()

    props = {
      searchChange,
      searchSubmit
    }

    search = shallow(<Search {...props} />)
  })

  it('Should render an input', () => {
    expect(search.find('input')).toBeTruthy()
  })

  it('Should render a submit button', () => {
    expect(search.find('button')).toBeTruthy()
  })

  it('Should dispatch searchChange action when input change', () => {
    const input = search.find('input')
    input.simulate('change')
    expect(searchChange).toHaveBeenCalled()
  })

  it('Should dispatch searchSubmit action when click button', () => {
    const button = search.find('button')
    button.simulate('click')
    expect(searchSubmit).toHaveBeenCalled()
  })
})

