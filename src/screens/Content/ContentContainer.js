import { connect } from 'react-redux'
import Content from './Content'

function mapStateToProps(state) {
  const { selectedPost } = state

  return {
    selectedPost
  }
}

export default connect(mapStateToProps)(Content)
