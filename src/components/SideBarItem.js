import React from 'react'
import { PropTypes as ptypes } from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import CloseIcon from '@material-ui/icons/CloseRounded'
import moment from 'moment'
import RightArrow from '@material-ui/icons/KeyboardArrowRightRounded'

const useStyles = makeStyles({
  itemContainer: {
    padding: '10px',
    height: 183,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '&:hover': {
      backgroundColor: '#4e5053',
      cursor: 'pointer'
    },

    '&:hover $rightIconContainer': {
      display: 'block',
      opacity: 1
    }
  },

  headerItem: {
    display: 'flex',
    justifyContent: 'space-between',
    color: 'white'
  },

  content: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    margin: '10px 0'
  },

  image: {
    minWidth: 120,
    maxWidth: 120,
    height: 'auto',
    borderRadius: '25%'
  },

  text: {
    padding: '0 16px',
    color: 'white',
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    textOverflow: 'ellipsis'
  },

  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white'
  },

  dismiss: {
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      color: 'white',
      cursor: 'pointer'
    }
  },
  closeIcon: {
    width: 20,
    height: 20,
    color: 'orange',
    border: '1px solid orange',
    borderRadius: 25
  },
  comments: {
    marginLeft: 10
  },
  dismissText: {
    marginLeft: 10
  },

  rightIconContainer: {
    position: 'absolute',
    top: '40%',
    right: -10,
    opacity: 0,
    transition: 'all 2s ease-in-out',
    display: 'none'
  },

  rightIcon: {
    width: 30,
    height: 30,
    color: 'white'
  },

  dot: {
    height: 15,
    width: 15,
    backgroundColor: '#51a0d5 ',
    borderRadius: '50%',
    display: 'inline-block',
    marginRight: 10
  },
  leftSide: {
    display: 'flex',
    alignItems: 'center'
  }
})

function SideBarItem({
  author,
  created,
  title,
  num_comments,
  imgUrl,
  handleClickEntry,
  handleRemoveEntry,
  highlight,
  readed
}) {
  const classes = useStyles()

  return (
    <div
      className={classes.itemContainer}
      style={highlight ? { backgroundColor: '#4e5053' } : {}}
      onClick={handleClickEntry}
    >
      <div className={classes.headerItem}>
        <div className={classes.leftSide}>
          <span
            className={classes.dot}
            style={readed ? { visibility: 'hidden' } : {}}
          ></span>
          <span>{author}</span>
        </div>
        <span>{moment(moment.unix(created)).fromNow()}</span>
      </div>
      <div className={classes.content}>
        <div>
          <img src={imgUrl} alt={'profile'} className={classes.image} />
        </div>
        <div className={classes.text}>{title}</div>
        <div className={classes.rightIconContainer}>
          <RightArrow className={classes.rightIcon} />
        </div>
      </div>
      <div className={classes.actions}>
        <div className={classes.dismiss} onClick={handleRemoveEntry}>
          <CloseIcon className={classes.closeIcon} />
          <span className={classes.dismissText}>{'Dissmiss Post'}</span>
        </div>
        <div>
          {num_comments}
          <span className={classes.comments}>{'comments'}</span>
        </div>
      </div>
    </div>
  )
}

SideBarItem.propTypes = {
  author: ptypes.string.isRequired,
  created: ptypes.number.isRequired,
  title: ptypes.string.isRequired,
  num_comments: ptypes.number.isRequired,
  imgUrl: ptypes.string.isRequired,

  handleClickEntry: ptypes.func.isRequired
}

export default SideBarItem
