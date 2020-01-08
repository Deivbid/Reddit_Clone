//this 'Container Component' Is to separate redux logic from the core component
import { connect } from 'react-redux'
import { getList } from './actions'
import SideBar from './SideBar'

function mapStateToProps(state) {
  const { entries, isFetching } = state

  return {
    list: entries,
    isFetching
  }
}

const mapDispatchToProps = {
  getList
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
