import React from "react";
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SvgIcon from "@material-ui/core/SvgIcon";
import Avatar from "@material-ui/core/Avatar";
import { Bell } from 'react-feather'; 
//import '../style.css';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from "react-redux";

//import authService from "../../../services/authService";

const useStyles = makeStyles({
    appbar: {
        boxShadow: 'none',
    },
    img: {
        maxHeight: 55,
    },
    grow: {
         flexGrow: 1
    },
    userSection: {
        display: 'flex',
        alignItems: 'center'
    },
    button: {
        marginRight: 10
    },
    bell: {
        marginRight: 10
    },
    // avatar: {
    //     marginLeft: 10
    // }
});
 
function Header(){
    const classes = useStyles();
    const account = useSelector(state => state.account);
    console.log(account.user);

    return (
        <AppBar position="fixed" color="inherit" className={classes.appbar}>
        <Toolbar>
            <img src="/images/logoexemplo.jpg" alt="logo" className={classes.img}></img> 
            <div className={classes.grow}></div>
            <div className={classes.userSection}>
                <Button color="primary" variant="contained" className={classes.button}>
                    Novo Post
                </Button>
                <SvgIcon className={classes.bell}>
                    <Bell></Bell>
                </SvgIcon>
                <Avatar alt="Gustavo" src={account.user && account.user.avatar} className={classes.avatar}></Avatar>
            </div>
            {/* <div className="">
                <a href='/'>JOBS - Alteração</a>
                <input type="text"></input>
            </div>
            <div className="">
                <Button color="primary" variant="contained">Novo Post</Button>
                <span>imagem1</span>
                <span>imagem2</span>
            </div> */}
        </Toolbar>
    </AppBar>
    )
}
export default Header;