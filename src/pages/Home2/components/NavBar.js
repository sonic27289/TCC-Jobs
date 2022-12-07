import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import './styles.css';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        width: 275,
        marginRight: theme.spacing(2)
    },
    button: {
        width: '100%',
        marginBottom: '15px'
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

const notify = () => toast.info('Não existe mais tags a serem exibidas', {
    position: "top-center",
    autoClose: 7000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
});


function NavBar(){
    const classes = useStyles();
    const navigate = useNavigate();
    const account = useSelector((state) => state.account);
    const isAuthenticated = !!account.user; 

    return (
        <div className="navbar">
        <Paper className={classes.root}>
            {
                !isAuthenticated && (
                <>
                    <Button variant="outlined" color="inherit" className={classes.button} onClick={() => navigate('/login')}>
                        Logue em sua Conta
                    </Button> 
                    <Button variant="outlined" color="secondary" className={classes.button} onClick={() => navigate('/logup')}>
                        Registrar Grátis
                    </Button>
                </>
                )
            }
            <ListSubheader>{`Tags em Alta`}</ListSubheader>
            {
                tags.map((item) => (
                    <ListItem dense button key={`item-${item.id}-${item.name}`}>
                        <ListItemText primary={`#${item.name}`}></ListItemText>
                    </ListItem>
                ))
            }
            <ListItem button onClick={notify}>
                Exibir mais Tags
            </ListItem>
        </Paper>
        </div>
    )
}

export default NavBar;