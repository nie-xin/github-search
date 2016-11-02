import React from 'react'
import { shallow } from 'enzyme';
import RepositoryList from '../../src/components/RepositoryList'

describe('(Component) RepositoryList', () => {
  let repositoryList, props

  beforeEach(() => {
    props = {
      loading: false,
      error: '',
      entities: []
    }
  })

  it('Should render loading message when loading repositories', () => {
    props = {
      ...props,
      loading: true,
    }
    repositoryList = shallow(<RepositoryList {...props} />)
    expect(repositoryList.contains(<p className='list__loading'>loading repositories...</p>)).toBeTruthy()
  })

  it('Should render error message if error occurs', () => {
    props = {
      ...props,
      loading: false,
      error: 'test error'
    }
    repositoryList = shallow(<RepositoryList {...props} />)
    expect(repositoryList.contains(<p className='list__error'>test error</p>)).toBeTruthy()
  })

  it('Should render list when fetching succeed', () => {
    props = {
      ...props,
      entities: [{
        id: 1,
        name: 'test1',
        url: 'test1.com'
      }]
    }
    repositoryList = shallow(<RepositoryList {...props} />)
    expect(repositoryList.find('ul')).toBeTruthy()
  })
})

