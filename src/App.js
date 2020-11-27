import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Box, Button, AppBar, Toolbar } from '@material-ui/core'
import { Home as HomeIcon } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import Consulter from './components/Consulter'
import Airs from './components/Airs'
import Home from './components/Home'

const useStyles = makeStyles({
  bar: {
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& a': {
      margin: '0 5px',
    },
  },
  appBar: {
    background: '#C72C2C',
  }
})

function App() {
  const classes = useStyles()
  return (
    <Router basename='/timbres'>
      <AppBar position='static' className={classes.appBar}>
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
            to='/consulter'
            startIcon={<i className='fas fa-user'></i>}>
            Consulter base
          </Button>
          <Button
            color='inherit'
            component={Link}
            to='/airs'
            startIcon={<i className='far fa-user'></i>}>
            Airs
          </Button>
        </Toolbar>
      </AppBar>
      <Box m={2} />
      <div>
        <Switch>
          <Route exact path='/' children={Home} />
          <Route path='/consulter' children={Consulter} />
          <Route path='/airs' children={Airs} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
