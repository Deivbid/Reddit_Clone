import React, { useEffect } from 'react'
import { PropTypes as ptypes } from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  container: {}
})

function SideBar({ list, getList }) {
  const classes = useStyles()

  useEffect(() => {
    if (!list || list.length === 0) {
      getList()
    }
  }, [])

  return (
    <div className={classes.container}>
      <ul>
        {list &&
          list.map((item, index) => {
            return <div>{item.data.author}</div>
          })}
      </ul>
    </div>
  )
}

SideBar.propTypes = {
  list: ptypes.array,
  //Functions
  getList: ptypes.func.isRequired
}

export default SideBar
