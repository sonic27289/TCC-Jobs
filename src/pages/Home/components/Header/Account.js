import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useNavigate } from "react-router";


import { logOut } from "../../../../actions/accountActions";

function Account(){
    const account = useSelector((state) => state.account);
    const [isOpen, setOpen] = useState(false);
    const ref = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isAuthenticated = !!account.user

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleLogOut = () => {
        handleClose();

        dispatch(logOut());
        navigate('/');
    }

    const handleLogIn = () => {
        handleClose();

        navigate('/login');
    }

    const handleLogUp = () => {
        handleClose();

        navigate('/logup');
    }

    const handleProfile = () => {
        handleClose();

        navigate(`/${account.user?.username}`);
    }
    const handlePosts = () => {
        handleClose();

        navigate(`/${account.user?.username}/posts`);
    }
    const handleConnections = () => {
        handleClose();

        navigate(`/${account.user?.username}/connections`);
    }

    return (
        <>
            <Avatar 
            ref={ref}
            onClick={handleOpen} 
            alt={`${account.user}`}
            src={account.user && account.user.avatar}
            >
            </Avatar>
            {
            isAuthenticated
            ?
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
                <MenuItem onClick={handleProfile}>Perfil</MenuItem>
                <MenuItem onClick={handlePosts}>Meus Posts</MenuItem>
                <MenuItem onClick={handleConnections}>Minhas Conexões</MenuItem>
                <MenuItem onClick={handleLogOut}>Sair</MenuItem>
            </Menu>
            :
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
        }
        </>
    )
}

export default Account;