import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        width: 275,
        marginRight: theme.spacing(2)
    },
    button: {
        width: '100%'
    }
}));

const tags = [
    { id: 1, name: 'reactjs'},
    { id: 2, name: 'reactjs'},
    { id: 3, name: 'reactjs'},
    { id: 4, name: 'reactjs'},
    { id: 5, name: 'reactjs'},
    { id: 6, name: 'reactjs'}
]

function NavBar(){
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Button variant="outlined" color="secondary" className={classes.button}>
                Registrar Grátis
                </Button>
            <ListSubheader>{`Tags em Alta`}</ListSubheader>
            {
                tags.map((item) => (
                    <ListItem dense button key={`item-${item.id}-${item.name}`}>
                        <ListItemText primary={`#${item.name}`}></ListItemText>
                    </ListItem>
                ))
            }
            <ListItem button>
                Exibir mais Tags
            </ListItem>
        </Paper>
    )
}

export default NavBar;