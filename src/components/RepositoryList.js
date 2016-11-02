import React, { PropTypes } from 'react'
import Repository from './Repository'

const RepositoryList = ({ loading, entities, error }) => {
  if (loading) {
    return (
      <p className='list__loading'>
        loading repositories...
      </p>
    )
  }

  if (error.length) {
    return (
      <p className='list__error'>
        {error}
      </p>
    )
  }

  return (
    <ul className='list'>
      {entities.map(repo =>
        <Repository
          key={repo.id}
          {...repo}
        />
      )}
    </ul>
  )
}

RepositoryList.propTypes = {
  entities: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired
}

export default RepositoryList
