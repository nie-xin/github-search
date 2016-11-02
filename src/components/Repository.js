import React, { PropTypes } from 'react'

const Repository = ({ name, url }) => (
  <li className='list--item'>
    <a href={url} target={'_blank'}>
      {name}
    </a>
  </li>
)

Repository.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default Repository
