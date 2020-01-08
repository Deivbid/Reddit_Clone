import React, { useEffect } from 'react'
import { PropTypes as ptypes } from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import _get from 'lodash/get'

//Components
import SideBarItem from '../../components/SideBarItem'
import ListHeader from '../../components/ListHeader'
import ListFooter from '../../components/ListFooter'
//Material UI
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
//Features
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import InfiniteScroll from 'react-infinite-scroller'

const genericImage = `https://logodownload.org/wp-content/uploads/2018/02/reddit-logo-16.png`
const useStyles = makeStyles((theme) => ({
  container: {
    height: '100%',
    backgroundColor: '#37383a',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      width: 380
    }
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    overflowY: 'auto'
  },
  empty: {
    display: 'flex',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 700
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: 380,
      flexShrink: 0
    }
  },
  drawerPaper: {
    width: 380,
    border: 'none'
  }
}))

function SideBar({
  getList,
  list,
  selectPost,
  removePost,
  selectedPost,
  next,
  resetList,
  toggleDrawer,
  mobileOpen
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
      console.log('Que sucede: ', toggleDrawer)
      if (toggleDrawer) {
        toggleDrawer()
      }
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

  const onLoadMore = () => {
    getList(next)
  }

  const drawer = (
    <div className={classes.container}>
      <div className={classes.list}>
        <ListHeader text={'Reddit Posts'} />
        {list && list.length > 0 ? (
          <InfiniteScroll
            pageStart={0}
            loadMore={onLoadMore}
            hasMore={true}
            useWindow={false}
            threshold={400}
          >
            <ReactCSSTransitionGroup
              transitionName='course-item'
              transitionLeave={true}
              transitionAppear={true}
              transitionAppearTimeout={2500}
              transitionEnterTimeout={1700}
              transitionLeaveTimeout={1000}
              component='div'
            >
              {list &&
                list.map((item, index) => {
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
                        selectedPost
                          ? selectedPost.data.id === item.data.id
                          : false
                      }
                      readed={item.readed}
                    />
                  )
                })}
            </ReactCSSTransitionGroup>
          </InfiniteScroll>
        ) : (
          <div className={classes.empty}>{'Empty :c'}</div>
        )}
        <ListFooter handleDismissAll={removeAll} />
      </div>
    </div>
  )

  return (
    <nav className={classes.drawer} aria-label='mailbox folders'>
      <Hidden smUp implementation='css'>
        <Drawer
          variant='temporary'
          anchor={'left'}
          open={mobileOpen}
          onClose={toggleDrawer}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation='css'>
        <Drawer
          classes={{
            paper: classes.drawerPaper
          }}
          variant='permanent'
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  )
}

SideBar.propTypes = {
  list: ptypes.array,
  selectedPost: ptypes.object,
  getList: ptypes.func.isRequired,
  selectPost: ptypes.func.isRequired,
  removePost: ptypes.func.isRequired
}

export default SideBar
