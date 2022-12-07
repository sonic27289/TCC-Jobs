import React from "react";
//import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
//import SvgIcon from "@material-ui/core/SvgIcon";
//import Avatar from "@material-ui/core/Avatar";
//import { Bell } from 'react-feather'; 
//import '../style.css';
import Account from "./Account2";
import { makeStyles, useTheme } from '@material-ui/core/styles';
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

//import { CenterFocusStrong } from "@material-ui/icons";
//import authService from "../../../services/authService";

const useStyles = makeStyles({
    appbar: {
        boxShadow: 'none',
    },
    img: {
        maxHeight: 55,
        maxWidth: 130
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
    // bell: {
    //     marginRight: 10
    // }
    box: {
        marginLeft: 10,
        marginRight: 30
    }
    // avatar: {
    //     marginLeft: 10
    // }
});
 
function Header(){
    const classes = useStyles();
    // const account = useSelector(state => state.account);
    const theme = useTheme();  

    return (
        <AppBar position="fixed" color="inherit" className={classes.appbar}>
        <Toolbar>
            <Link to="/">
                <img src={theme.darkMode ? "/images/logo/logojobs2.jpeg" : "/images/logo/logojobs2.jpeg" }alt="logo" className={classes.img}></img> 
            </Link>
            <div className={classes.grow}></div>
            <div className={classes.userSection}>
                <Box marginLeft={2} className={classes.box}>
                    {/* <WritePost></WritePost> */}
                </Box>
                {/* <Button color="primary" variant="contained" className={classes.button}>
                    Novo Post
                </Button> */}
                {/* <SvgIcon className={classes.bell}>
                    <Bell></Bell>
                </SvgIcon> */}
                <Box marginLeft={2} className={classes.box}>
                    {/* <Notifications></Notifications> */}
                </Box>
                <Box marginLeft={2} className={classes.box}>
                    {/* <Settings></Settings> */}
                </Box>
                <Box marginLeft={2} className={classes.box}>
                    <Account></Account>
                </Box>
                {/* <Avatar alt="Gustavo" src={account.user && account.user.avatar} className={classes.avatar}></Avatar> */}
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