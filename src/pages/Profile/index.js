import React from "react";
import Header from "../Home/components/Header";
import { makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
   root: {
    height: '100%',
    padding: 55,
   }
}));

function Profile() {
    const classes = useStyles();
    const account = useSelector((state) => state.account);

    return (
        <>
        <Header></Header>
        <h1 className={classes.root}>Meu Perfil</h1>
        </>
    )
}

export default Profile;