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

import { makeStyles } from '@material-ui/core/styles';

import { useSelector, useDispatch } from "react-redux";

import { getNotifications } from "../../../../actions/notificationsActions";

const iconsMap = {
    reviews: StarIcon,
    new_comment: MessageIcon,
    like: HeartIcon,
    connection: ConnectionIcon
}

const useStyles = makeStyles({
    box: {
        padding: 8
        }
});

function Notifications(){
    const account = useSelector((state) => state.account);
    const notifications = useSelector((state) => state.notifications);
    const isAuthenticated = !!account.user;
    const ref = useRef(null);
    const [isOpen, setOpen] = useState(false); 
    const dispatch = useDispatch();
    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
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
                    Notificações
                </Typography>
            </Box>
            {
                notifications.map((notifications))
            }
            <List>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <SvgIcon>

                            </SvgIcon>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Photos" primaryTypographyProps={{variant: 'subtitle2', color: 'textPrimary'}} secondary="Jan 9, 2014"></ListItemText>
                </ListItem>
            </List>
            </Popover>
        </>
        )
    );
}

export default Notifications;