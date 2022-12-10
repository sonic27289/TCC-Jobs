import React from "react";
//import './style.css'
import { makeStyles } from '@material-ui/core/styles';
//import { Route, Routes } from 'react-router-dom';
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

import Header from "./components/Header";   
import NavBar from "./components/NavBar";
import Feed from "./components/Feed";
import Footer from "./components/Footer";
import './styles.css';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.dark
    },
    main: {
        padding: 5
    },
    toolbar: {
        minHeight: 64
    },
    box: {
        display: 'flex'
    },
    figure: {
        width: '35%'
    },
    color: {
        color: theme.palette.text.primary
    }
}));

function Home(){
    const classes = useStyles();
    
    return (
        
        <div className={classes.root}>
            <Header></Header>
            <div className={classes.toolbar}></div>
            <div className={classes.color}>
                <figure>
                    <a color="inherit" href="https://assetstore.unity.com"><img src="images/anuncios/anuncio3.jpg" alt="anuncios" class="imagem" href="https://www.google.com"></img>
                        <figcaption class="title2">Level up your asset library</figcaption>
                        <figcaption class="title1">Get ahead on your game with the latest tools and packs. Create with Unity Asset Store.</figcaption>
                        <figcaption class="title3"><b>Anúncio - </b>Unity Asset Store</figcaption>
                    </a>
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
            <Footer></Footer>
        </div>
    );
}

export default Home;