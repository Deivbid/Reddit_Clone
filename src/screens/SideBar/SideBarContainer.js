import { connect } from 'react-redux'
import { getList, selectPost, removePost, resetList } from './actions'
import SideBar from './SideBar'

function mapStateToProps(state, ownProps) {
  const { entries, isFetching, selectedPost } = state

  return {
    list: entries,
    isFetching,
    selectedPost,
    toggleDrawer: ownProps.toggleDrawer || null,
    mobileOpen: ownProps.mobileOpen || false
  }
}

const mapDispatchToProps = {
  getList,
  selectPost,
  removePost,
  resetList
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
