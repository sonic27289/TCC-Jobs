import React, { useState } from "react";
import Header from "../Home/components/Header";
import Footer from "../Home/components/Footer";
import { makeStyles } from "@material-ui/core";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import AccountProfile from "./AccountProfile";
import Posts from "./Posts";
import Connections from "./Connections";
import Groups from "./Groups";

import './profileStyles.css';

const useStyles = makeStyles((theme) => ({
   root: {
    height: '100%',
    paddingTop: 100,
    backgroundColor: theme.palette.background.dark
   }
}));

function Profile() {
    const classes = useStyles();
    // const account = useSelector((state) => state.account);
    // const params = useParams();
    const [tab, setTab] = useState(0);

    const handleChange = (event, newValue) => {
        setTab(newValue);
    }

    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <Typography
                component="div"
                role="tabpanel"
                hidden={value !== index}
                id={`wrapped-tabpanel-${index}`}
                arial-labelledby={`wrapped-tab-${index}`}
                {...other}
            >  
                {value === index && <Box p={3}>{children}</Box>}
            </Typography>
        )
    }

    return (
        <div className={classes.root}>
            <Header></Header>
                <Container maxWidth="lg" >
                    
                    <Grid container spacing={4} >               
                        <Grid item md={4} xs={12}>
                            <AccountProfile></AccountProfile>
                        </Grid>
                        <Grid item md={8} xs={12}>
                        <Tabs value={tab} onChange={handleChange}>
                            <Tab label="Posts" color="primary" textColor="primary"></Tab>
                            <Tab label="Conexões" color="primary" textColor="primary"></Tab>
                            <Tab label="Grupos" color="primary" textColor="primary"></Tab>
                        </Tabs>
                        <TabPanel value={tab} index={0}>
                                <Posts></Posts>
                        </TabPanel>
                        <TabPanel value={tab} index={1}>
                                <Connections></Connections>
                        </TabPanel>
                        <TabPanel value={tab} index={2}>
                                <Groups></Groups>
                        </TabPanel>
                        </Grid>
                    </Grid>
                </Container>
                <figure>
                    <a color="inherit" href="https://picpay.com/rendimento-online"><img src="images/anuncios/anuncio2.png" alt="anuncios" class="imagem5"></img>
                        <figcaption class="title2">Seu dinheiro merece mais, vem pro PicPay</figcaption>
                        <figcaption class="title1">Xi, vai abrir conta num banco que não rende? Vem pro PicPay, o melhor rendimento do Brasil</figcaption>
                        <figcaption class="title3"><b>Anúncio - </b>PicPay</figcaption>
                    </a>
                </figure>
                <Footer></Footer>
        </div>
    )
}

export default Profile;