import React from "react";
import Header from "../Home/components/Header";
import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    main: {
        height: 'calc(100% - 200px)',
        padding: 24,
    },
    toolbar: {
        minHeight: 54,
    },
    box: {
        display: 'flex',
        background: '',
        height: ('calc(100vh - 170px)'),
        overflow: 'scroll'
    },
    appBar: {
        top: 'auto',
        bottom: 0,
        alignItems: 'center'
    },
    button: {
        marginRight: theme.spacing(2),
    },
    box1: {
        width: '50%',
        height: '100%',
        borderRight: '1px solid #DDD',
        padding: 8
    },
    box2: {
        width: '50%',
        height: '100%',
        padding: 8
    }
}));

function NewPost(){
    const classes = useStyles();

    return ( 
        <>
        <div className={classes.root}>
            <Header></Header>
            <div className={classes.toolbar}></div>
            <main className={classes.main}>
                    <Box display="flex" className={classes.box}>
                        <Box className={classes.box1}>
                            <p>Upload</p>
                            <p>Titulo</p>
                            <p>Tags</p>
                            <p>Editor</p>
                        </Box>
                        <Box className={classes.box2}>Resultado</Box>
                    </Box>
            </main>
        </div>
        <AppBar position="fixed" color="inherit" className={classes.appBar}>
            <Toolbar>
                <Button className={classes.button}>Salvar rascunho</Button>
                <Button color="secondary" variant="outlined">Publicar</Button>
            </Toolbar>
        </AppBar>
        </>
    )
}

export default NewPost;