import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useNavigate } from "react-router";
//import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles({
//     avatar: {
        
//     }
// });

function Account(){
    const account = useSelector((state) => state.account);
    const [isOpen, setOpen] = useState(false);
    const ref = useRef();
    const navigate = useNavigate();
    //const classes = useStyles();


    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }


    const handleLogIn = () => {
        handleClose();

        navigate('/login');
    }

    const handleLogUp = () => {
        handleClose();

        navigate('/logup');
    }

    return (
        <>
            <Avatar 
            ref={ref}
            onClick={handleOpen} 
            alt="Gustavo" 
            src={account.user && account.user.avatar}
            >
            </Avatar>
            <Menu
                anchorEl={ref.current}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                open={isOpen}
                onClose={handleClose}
                getContentAnchorEl={null}
            >
                <MenuItem onClick={handleLogIn}>Entrar</MenuItem>
                <MenuItem onClick={handleLogUp}>Se Registrar</MenuItem>
            </Menu>
        </>
    )
}

export default Account;