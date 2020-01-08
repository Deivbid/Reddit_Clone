import React from 'react'
import { PropTypes as ptypes } from 'prop-types'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { yellow } from '@material-ui/core/colors'

const useStyles = makeStyles({
  ListFooterContainer: {
    position: 'absolute',
    bottom: 0,
    height: 60,
    backgroundColor: '#37383a',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
  }
})

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(yellow[500]),
    fontWeight: 500,
    backgroundColor: yellow[500],
    '&:hover': {
      backgroundColor: yellow[700]
    }
  }
}))(Button)

function ListFooter({ handleDismissAll }) {
  const classes = useStyles()

  return (
    <div className={classes.ListFooterContainer}>
      <ColorButton onClick={handleDismissAll}>{'Dismiss All'}</ColorButton>
    </div>
  )
}

ListFooter.propTypes = {
  handleDismissAll: ptypes.func.isRequired
}

export default ListFooter
