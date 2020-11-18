import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Box, Button, AppBar, Toolbar } from '@material-ui/core'
import { Home as HomeIcon } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import A from './components/A'
import B from './components/B'
import Home from './components/Home'

const useStyles = makeStyles({
  bar: {
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& a': {
      margin: '0 5px',
    },
  },
})

function App() {
  const classes = useStyles()
  return (
    <Router basename='/timbres'>
      <AppBar position='static'>
        <Toolbar className={classes.bar}>
          <Button
            color='inherit'
            aria-label='home'
            component={Link}
            to='/'
            startIcon={<HomeIcon />}>
            Accueil
          </Button>
          <Button
            color='inherit'
            component={Link}
            to='/a'
            startIcon={<i className='fas fa-user'></i>}>
            A
          </Button>
          <Button
            color='inherit'
            component={Link}
            to='/b'
            startIcon={<i className='far fa-user'></i>}>
            B
          </Button>
        </Toolbar>
      </AppBar>
      <Box m={2} />
      <div>
        <Switch>
          <Route exact path='/' children={Home} />
          <Route path='/a' children={A} />
          <Route path='/b' children={B} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
