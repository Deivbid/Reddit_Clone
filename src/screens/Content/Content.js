import React from 'react'
import { PropTypes as ptypes } from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/MenuRounded'
import Hidden from '@material-ui/core/Hidden'

const genericImage = `https://logodownload.org/wp-content/uploads/2018/02/reddit-logo-16.png`

const useStyles = makeStyles({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#2d2d2d',
    display: 'flex',
    justifyContent: 'center',
    overflowY: 'auto',
    position: 'relative'
  },
  notItems: {
    height: '100%',
    color: 'white',
    display: 'flex',
    alignItems: 'center'
  },

  postContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 50,
    color: 'white'
  },

  title: {
    width: '100%',
    fontSize: 30,
    marginBottom: 30
  },
  button: {
    color: 'white',
    border: '1px solid white',
    '&:hover': {
      border: '2px solid white'
    }
  },
  content: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  description: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    margin: '25px 0'
  },

  image: {
    maxWidth: 150,
    height: 'auto'
  },

  menuContainer: {
    position: 'absolute',
    left: 20,
    top: 20
  },

  menu: {
    color: 'white',
    width: 25,
    height: 25,
    '&:hover': {
      cursor: 'pointer'
    }
  },

  drawerContainer: {
    display: 'flex'
  }
})

function Content({ selectedPost, toggleDrawer }) {
  const classes = useStyles()
  let content

  if (selectedPost) {
    content = (
      <div className={classes.postContainer}>
        <div className={classes.leftSide}>
          <div className={classes.title}>{selectedPost.data.author}</div>
        </div>
        <div className={classes.content}>
          <img
            src={
              selectedPost.data.thumbnail.includes('.')
                ? selectedPost.data.thumbnail
                : genericImage
            }
            alt={'profile'}
            className={classes.image}
          />
        </div>
        <div className={classes.description}>{selectedPost.data.title}</div>
        <div className={classes.goToButton}>
          <Button
            color='primary'
            variant='outlined'
            className={classes.button}
            classes={{ outlinedPrimary: classes.button }}
            href={`https://www.reddit.com${selectedPost.data.permalink || ''}`}
            target='_blank'
          >
            {'Go to Post!'}
          </Button>
        </div>
      </div>
    )
  } else {
    content = (
      <div className={classes.notItems}>
        <span>{'Click a Post!'}</span>
      </div>
    )
  }

  return (
    <div className={classes.container}>
      <Hidden smUp implementation='css'>
        <div className={classes.menuContainer}>
          <MenuIcon className={classes.menu} onClick={toggleDrawer(true)} />
        </div>
      </Hidden>
      {content}
    </div>
  )
}

Content.propTypes = {
  selectedPost: ptypes.object,
  toggleDrawer: ptypes.func
}

export default Content
