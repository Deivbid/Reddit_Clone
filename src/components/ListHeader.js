import React from 'react'
import { PropTypes as ptypes } from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  ListHeaderContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    margin: '10px 0',
    marginTop: 25,
    fontSize: 20,
    fontWeight: 700,
    color: 'white'
  }
})

function ListHeader({ text }) {
  const classes = useStyles()

  return <div className={classes.ListHeaderContainer}>{text}</div>
}

ListHeader.propTypes = {
  text: ptypes.string.isRequired
}

export default ListHeader
