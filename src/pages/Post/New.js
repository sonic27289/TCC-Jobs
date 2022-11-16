import React from "react";
import Header from "../Home/components/Header";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',

    },
    main: {
        height: '100vh',
        display: 'flex',
        width: '1280px',
        margin: '0 auto',
        padding: 24
    },
    toolbar: {
        minHeight: 64
    },
    box: {
        display: 'flex'
    }
})

function NewPost(){
    const classes = useStyles();

    return ( 
        <div className={classes.root}>
            <Header></Header>
            <div className={classes.toolbar}>
            </div>
            <main className={classes.main}>
            <h1>Nova Postagem</h1>
            </main>
        </div>
    )
}

export default NewPost;