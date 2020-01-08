import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

//Core Components
import SideBar from './screens/SideBar'
import Content from './screens/Content'

const useStyles = makeStyles({
  container: {
    width: '100%',
    height: '100vh',
    display: 'flex'
  }
})

function App() {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const toggleDrawer = (flag) => () => {
    setOpen(flag)
  }

  return (
    <div className={classes.container}>
      <SideBar mobileOpen={open} toggleDrawer={toggleDrawer(false)} />
      <Content toggleDrawer={toggleDrawer} />
    </div>
  )
}

export default App
