import { connect } from 'react-redux'
import RepositoryList from '../components/RepositoryList'

const mapStateToProps = (state) => ({
  entities: state.repositories.entities,
  loading: state.repositories.loading,
  error: state.repositories.error
})

const RepositoryListContainer = connect(mapStateToProps)(RepositoryList)

export default RepositoryListContainer
