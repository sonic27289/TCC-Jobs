import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import { usePost } from "../../../../context/PostContext";

const useStyles = makeStyles((theme) => ({
    appBar: {
        top: 'auto',
        bottom: 0,
        alignItems: 'center'
    },
    button: {
        marginRight: theme.spacing(2),
    }
}));

function BottomBar(){
    const classes = useStyles();
    const ctx = usePost();

    const handleSaveDraft = () => {
        //Acessar o BackEnd e salvar o rascunho
    }

    const handlePublish = () => {
        //Acessar o BackEnd e publicar a postagem
    }

    return(
        <AppBar position="fixed" color="inherit" className={classes.appBar}>
        <Toolbar>
            <Button className={classes.button}>Salvar rascunho</Button>
            <Button color="secondary" variant="outlined">Publicar</Button>
        </Toolbar>
    </AppBar>
    )
}

export default BottomBar;