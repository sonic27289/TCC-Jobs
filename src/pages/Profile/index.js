import React, { useState } from "react";
import Header from "../Home/components/Header";
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

const useStyles = makeStyles((theme) => ({
   root: {
    height: '100%',
    paddingTop: 90,
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
        <Container maxWidth="lg">
            <Header></Header>
            <Grid container spacing={4} className={classes.root}>               
                <Grid item md={4} xs={12}>
                    <AccountProfile></AccountProfile>
                </Grid>
                <Grid item md={8} xs={12}>
                   <Tabs value={tab} onChange={handleChange}>
                    <Tab label="Posts"></Tab>
                    <Tab label="Conexões"></Tab>
                   </Tabs>
                   <TabPanel value={tab} index={0}>
                        <Posts></Posts>
                   </TabPanel>
                   <TabPanel value={tab} index={1}>
                        <Connections></Connections>
                   </TabPanel>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Profile;