import React, { useRef, useState, useEffect } from "react";
import {
    Bell as BellIcon,
    Star as StarIcon,
    MessageCircle as MessageIcon,
    Heart as HeartIcon,
    Users as ConnectionIcon 
    } from "react-feather";
import SvgIcon from "@material-ui/core/SvgIcon";
import IconButton from "@material-ui/core/IconButton";
import Popover from "@material-ui/core/Popover";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import './styles.css';

import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from "react-router";

import { useSelector, useDispatch } from "react-redux";

import { getNotifications } from "../../../../actions/notificationsActions";
import { toast } from "react-toastify";

const iconsMap = {
    reviews: StarIcon,
    new_comment: MessageIcon,
    like: HeartIcon,
    connection: ConnectionIcon
}

const useStyles = makeStyles((theme) => ({
    box: {
        padding: 8
        },
    icon: {
        background: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText
    }
}));

function Notifications(){
    const account = useSelector((state) => state.account);
    const notifications = useSelector((state) => state.notifications.notifications);
    const isAuthenticated = !!account.user;
    const ref = useRef(null);
    const [isOpen, setOpen] = useState(false); 
    const dispatch = useDispatch();
    const classes = useStyles();
    const navigate = useNavigate();

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleClick = () => {
        navigate(`/${account.user?.username}`);
        toast('Você possui novas conexões', {
            position: "bottom-left",
            autoClose: 7000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        }  );
    }

    useEffect(() => {
        dispatch(getNotifications());
    }, [dispatch])

    return (
        isAuthenticated && (
        <>
            <IconButton ref={ref} onClick={handleOpen}>
                <SvgIcon>
                    <BellIcon></BellIcon>
                </SvgIcon>
            </IconButton>
            <Popover 
                onClose={handleClose}
                open={isOpen}
                anchorEl={ref.current}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
            <Box p={2} className={classes.box}>
                <Typography variant="h6" color="textPrimary">
                    <b class="title6" align="center" color="inherit">Notificações</b>
                </Typography>
            </Box>
            <List>
                {notifications.map((notifications) => {
                    const Icon = iconsMap[notifications.type];
                    return (
                <ListItem>
                    <ListItemAvatar onClick={handleClick}>
                        <Avatar className={classes.icon}>
                            <SvgIcon>
                                <Icon></Icon>
                            </SvgIcon>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText 
                        primary={notifications.title} 
                        primaryTypographyProps={{
                            variant: 'subtitle2', 
                            color: 'textPrimary'}} 
                        secondary={notifications.description}
                        onClick={handleClick}>
                        </ListItemText>
                </ListItem>
                    );
                })}
            </List>
            </Popover>
        </>
        )
    );
}

export default Notifications;