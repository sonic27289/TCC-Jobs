import React from "react";
//import './style.css'
import { makeStyles } from '@material-ui/core/styles';

import Header from "./components/Header";
import Feed from "./components/Feed";
import NavBar from "./components/NavBar";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

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

function Home(){
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <Header></Header>
            <div className={classes.toolbar}></div>
            <main className={classes.main}>
                <Container maxWidth="lg">
                    <Box display="flex" className={classes.box}>
                        <NavBar></NavBar>
                        <Feed></Feed>
                    </Box>
                </Container>
            </main>
        </div>
    );
}

export default Home;