import { connect } from 'react-redux'
import {
  searchChange,
  searchSubmit
} from '../modules/search'
import Search from '../components/Search'

const mapStateToProps = (state) => ({
  search: state.search
})

const mapDispatchToProps = (dispatch) => ({
  searchChange: (event) => dispatch(searchChange(event.target.value.trim())),
  searchSubmit: () => dispatch(searchSubmit())
})

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)

export default SearchContainer
