import React from "react";
//import './style.css'
import { makeStyles } from '@material-ui/core/styles';
//import { Route, Routes } from 'react-router-dom';
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

import Header from "./components/Header";   
import NavBar from "./components/NavBar";
import Feed from "./components/Feed";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.dark
    },
    main: {
        padding: 24
    },
    toolbar: {
        minHeight: 64
    },
    box: {
        display: 'flex'
    }
}));

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