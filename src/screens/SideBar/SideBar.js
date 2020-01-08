import React from 'react'
//import { PropTypes as ptypes } from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  container: {}
})

function SideBar() {
  const classes = useStyles()

  return <div className={classes.container}>SideBar</div>
}

export default SideBar
