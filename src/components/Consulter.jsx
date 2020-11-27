import React, { useState } from 'react';
import { withRouter } from 'react-router'
import { Container } from '@material-ui/core'
import { makeStyles, withStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import DataTab from './DataTab'

const useStyles = makeStyles({
    root: {
        width: '100%',
        color: '#C72C2C',
    },
    actionItemStyles_1: {
        "&$selected": {
            color: '#C72C2C'
        }
    },
    actionItemStyles_2: {
        "&$selected": {
            color: '#F76637'
        }
    },
    actionItemStyles_3: {
        "&$selected": {
            color: '#F77937'
        }
    },
    actionItemStyles_4: {
        "&$selected": {
            color: '#F7A637'
        }
    },
    actionItemStyles_5: {
        "&$selected": {
            color: '#F7CB37'
        }
    },
    selected: {},
    grid: {
        justifyContent: 'center',
        textAlign: 'justify',

    }
});

const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText('#C72C2C'),
      backgroundColor: '#C72C2C',
      '&:hover': {
        backgroundColor: '#84303C',
      },
    },
  }))(Button);

function Consulter() {
    const queryBegin = 'https://localhost:8443/test/items/';
    const [title, setTitle] = useState()
    const [value, setValue] = useState();
    const [query, setQuery] = useState('https://localhost:8443/test/items/');
    const [data, setData] = useState([]);
    const [tabOn, setTabOn] = useState(false);

    const handleChange = (event, newValue) => {
        switch (newValue) {
            case 'air' : 
                setTitle('Air');
                break;
            case 'exemplaire_ouvrage' : 
                setTitle('Exemplaires ouvrages');
                break;
            case 'texte_publie' : 
                setTitle('Textes publiés');
                break;
            case 'theme' : 
                setTitle('Thèmes');
                break;
            default : 
                setTitle('Catalogues');
                break;
        }

        setValue(newValue);
        fetchData(newValue);
    }
    
    const classes = useStyles();
    
    async function fetchData(newValue) {
        setTabOn(false);
        setQuery(queryBegin + newValue);  
        const res = await fetch(queryBegin + newValue);
        let json = await res.json()
        setData(json)
        setTabOn(true);
    }

    return (
    <Container maxWidth='md'>
        <Grid container spacing={2} className={classes.grid}>
            <Grid item xs={12}>
                <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
                    <BottomNavigationAction classes={{
                                                        root: classes.actionItemStyles_1,
                                                        selected: classes.selected
                                                    }}
                                            label="Exemplaires ouvrages" 
                                            value="exemplaire_ouvrage" 
                                            icon={<i class="fas fa-book"></i>}
                    />
                    <BottomNavigationAction classes={{
                                                        root: classes.actionItemStyles_2,
                                                        selected: classes.selected
                                                    }}
                                            label="Textes publiés"
                                            value="texte_publie" 
                                            icon={<i class="fas fa-feather"></i>} 
                    />
                    <BottomNavigationAction classes={{
                                                        root: classes.actionItemStyles_3,
                                                        selected: classes.selected
                                                    }}
                                            label="Airs"
                                            value="air"
                                            icon={<i class="fas fa-music"></i>} 
                    />
                    <BottomNavigationAction classes={{
                                                        root: classes.actionItemStyles_4,
                                                        selected: classes.selected
                                                    }}
                                            label="Thèmes"
                                            value="theme" 
                                            icon={<i class="fas fa-tags"></i>} 
                    />
                    <BottomNavigationAction classes={{
                                                        root: classes.actionItemStyles_5,
                                                        selected: classes.selected
                                                    }}
                                            label="Catalogues"
                                            value="catalogue"
                                            icon={<i class="fas fa-bookmark"></i> } 
                    />
                </BottomNavigation>
           
            </Grid>
            <Grid item xs={12}>
               {tabOn && <DataTab data={data} title={title}/>}
            </Grid>    
        </Grid>   
    </Container>
    )
}

export default withRouter(Consulter)