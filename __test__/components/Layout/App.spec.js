import React from 'react'
import ReactDOM from 'react-dom'
import Layout from '../../../src/components/Layout/Layout'

describe('(Component) Layout', () => {
  it('Should render Layout component', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Layout />, div)
  })
})
