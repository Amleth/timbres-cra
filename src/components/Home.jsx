import { Avatar } from '@material-ui/core'
import { Box } from '@material-ui/core'
import { Container } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import { List } from '@material-ui/core'
import { ListItem } from '@material-ui/core'
import { ListItemText } from '@material-ui/core'
import { ListItemAvatar } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Search as SearchIcon } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import { DeveloperMode as DeveloperModeIcon } from '@material-ui/icons'
import React from 'react'
import { withRouter } from 'react-router'

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    flexGrow: 1
  },
  list: {
    margin: 0,
    padding: 0,
    '& li': {
      margin: 0,
      marginBottom: theme.spacing(2),
      padding: 0
    }
  },
  référence: {
    // borderBottom: '1px solid gray',
    // borderLeft: 'none',
    // borderRight: 'none',
    // borderTop: '1px solid gray',
    margin: 'auto',
    textAlign: 'justify',
    width: '50%'
  }
}))

function Home() {
  const classes = useStyles()
  return (
    <Container maxWidth='md'>
      <Box pt={5} pb={10}>
        <Typography variant='h2' component='h1' align='center'>
          Timbres
        </Typography>
      </Box>
      <Grid container className={classes.gridContainer} spacing={10}>
        <Grid item xs={7}>
          <Typography variant='body1' color='textSecondary' align='justify'>
            Blabla
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <List className={classes.list}>
            <ListItem disableGutters={true}>
              <ListItemAvatar>
                <Avatar>
                  <SearchIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary='Responsable scientifique' secondary='Alice TACAILLE' />
            </ListItem>
            <ListItem disableGutters={true}>
              <ListItemAvatar>
                <Avatar>
                  <DeveloperModeIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary='Modélisation & développement logiciel'
                secondary='Simon DEVAUCHELLE + Thomas BOTTINI'
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Box pt={10} pb={10}>
        <Typography variant='h5' component='h2' align='center'>
          Citer cette base
        </Typography>
        <Typography color='textSecondary' className={classes.référence}>
          Tacaille, A (2020, Juillet). Timbres [Base
          de données]. Consultée le {new Date().toLocaleDateString('fr-FR')}. Institut de Recherche
          en Musicologie — IReMus UMR 8223 CNRS. http://data-iremus.huma-num.fr/musrad30/
        </Typography>
      </Box>
    </Container>
  )
}

export default withRouter(Home)
