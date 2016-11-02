import React, { PropTypes } from 'react'

const Search = ({ searchChange, searchSubmit }) => (
  <div className='search'>
    <input
      className='search--input'
      placeholder={'Enter username'}
      onChange={searchChange}
    />

    <button
      className='search--submit'
      onClick={searchSubmit}
    >
      Search
    </button>
  </div>
)

Search.propTypes = {
  searchChange: PropTypes.func.isRequired,
  searchSubmit: PropTypes.func.isRequired
}

export default Search
