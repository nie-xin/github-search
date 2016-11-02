import React from 'react'
import Header from './Header'
import Search from '../containers/SearchContainer'
import RepositoryList from '../containers/RepositoryListContainer'

const App = () => (
  <div className='container--app'>
    <Header />
    <Search />
    <RepositoryList />
  </div>
)

export default App
