import React from "react";
//import './style.css'
import { makeStyles } from '@material-ui/core/styles';
//import { Route, Routes } from 'react-router-dom';
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

import Header from "./components/Header";   
import NavBar from "./components/NavBar";
import Feed from "./components/Feed";

import './styles2.css';


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

function Home2(){
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <Header></Header>
            <div className={classes.toolbar}></div>
            <div>
                <figure>
                    <img src="images/anuncios/anuncio2.png" alt="anuncios" class="imagem2"></img>
                    <figcaption class="title1">Informações da Figura</figcaption>
                    <figcaption class="title2">Informações da Figura</figcaption>
                    <figcaption class="title3">Informações da Figura</figcaption>
                </figure>
            </div>
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

export default Home2;