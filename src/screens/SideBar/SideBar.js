import React, { useEffect } from 'react'
import { PropTypes as ptypes } from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
//Lodash
import _get from 'lodash/get'
//Components
import ListHeader from '../../components/ListHeader'
import ListFooter from '../../components/ListFooter'
import SideBarItem from '../../components/SideBarItem'

const genericImage = `https://logodownload.org/wp-content/uploads/2018/02/reddit-logo-16.png`

const useStyles = makeStyles({
  container: {
    height: '100%',
    backgroundColor: '#37383a',
    position: 'relative'
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    overflowY: 'auto'
  }
})

function SideBar({
  list,
  getList,
  selectPost,
  selectedPost,
  removePost,
  resetList
}) {
  const classes = useStyles()

  useEffect(() => {
    if (!list || list.length === 0) {
      getList()
    }
  }, [])

  const handleClickEntry = (entry) => () => {
    if (entry) {
      selectPost(entry)
    }
  }

  const handleRemoveEntry = (entry) => (event) => {
    event.stopPropagation()
    if (entry) {
      removePost(entry)
    }
  }

  const removeAll = () => {
    if (list && list.length > 0) {
      resetList()
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.list}>
        <ListHeader text={'Reddit Posts'} />
        {list.map((item, index) => {
          let imgUrl = _get(item, 'data.thumbnail', genericImage)

          if (!imgUrl.includes('.')) {
            imgUrl = genericImage
          }
          return (
            <SideBarItem
              key={item.data.id}
              author={item.data.author}
              created={item.data.created}
              title={item.data.title}
              num_comments={item.data.num_comments}
              imgUrl={imgUrl}
              handleClickEntry={handleClickEntry(item)}
              handleRemoveEntry={handleRemoveEntry(item)}
              highlight={
                selectedPost ? selectedPost.data.id === item.data.id : false
              }
              readed={item.readed}
            />
          )
        })}

        <ListFooter handleDismissAll={removeAll} />
      </div>
    </div>
  )
}

SideBar.propTypes = {
  list: ptypes.array,
  selectedPost: ptypes.object,
  //Functions
  getList: ptypes.func.isRequired,
  selectPost: ptypes.func.isRequired,
  removePost: ptypes.func.isRequired
}

export default SideBar
