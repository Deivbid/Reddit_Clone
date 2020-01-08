import React from 'react'
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
  return (
    <div className={classes.container}>
      <SideBar />
      <Content />
    </div>
  )
}

export default App
