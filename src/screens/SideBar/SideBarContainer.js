//this 'Container Component' Is to separate redux logic from the core component
import { connect } from 'react-redux'
import { getList, selectPost, removePost, resetList } from './actions'
import SideBar from './SideBar'

function mapStateToProps(state) {
  const { entries, isFetching, selectedPost } = state

  return {
    list: entries,
    isFetching,
    selectedPost
  }
}

const mapDispatchToProps = {
  getList,
  selectPost,
  removePost,
  resetList
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
