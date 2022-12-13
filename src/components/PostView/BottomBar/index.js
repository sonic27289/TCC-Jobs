import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

// import { usePost } from "../../../../context/PostContext";

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
    const navigate = useNavigate();

    const rascunho = () => 
    toast.success('Publicação curtida', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
    });

    async function Publicar(){
        return (
                toast('Indo até o perfil do usuario', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light'
                }  
        ),
        navigate('/sonic27289')
        )
    }
    
    // const ctx = usePost();

    // const handleSaveDraft = () => {
    //     //Acessar o BackEnd e salvar o rascunho
    // }

    // const handlePublish = () => {
    //     //Acessar o BackEnd e publicar a postagem
    // }

    return(
        <AppBar position="fixed" color="inherit" className={classes.appBar}>
        <Toolbar>
            <Button className={classes.button} onClick={rascunho}>Curtir Publicação</Button>
            <Button color="primary" variant="outlined" onClick={Publicar}>Ir até o Perfil</Button>
        </Toolbar>
    </AppBar>
    )
}

export default BottomBar;