import React from "react";
import { useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar"; 
import Box from "@material-ui/core/Box"; 
import ReactMarkdown from "react-markdown";
import { makeStyles } from '@material-ui/core/styles';

import { usePost } from "../../../../context/PostContext";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    main: {
        height: 'calc(100% - 200px)',
        padding: 24,
    },
    toolbar: {
        minHeight: 54,
    },
    box: {
        display: 'flex',
        background: '',
        height: ('calc(100vh - 170px)'),
        overflow: 'scroll'
    },
    appBar: {
        top: 'auto',
        bottom: 0,
        alignItems: 'center'
    },
    button: {
        marginRight: theme.spacing(2),
    },
    box1: {
        width: '50%',
        height: '100%',
        borderRight: '1px solid #DDD',
        padding: 8
    },
    box2: {
        width: '50%',
        height: '100%',
        padding: 8
    },
    box3: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 16  
    },
    box4: {
        marginBottom: 16
    },
    box5: {
        marginBottom: 16
    },
    box6: {
        marginBottom: 16
    },
    box7: {
        marginBottom: 16
    },
    image: {
        height: 250,
    },
    imagePreview: {
        width: '100%',
        height: '100%'
    },
    editor: {
        width: '100%',
        height: '100%',
        resize: 'none',
        border: 'none',
        outline: 'none',
        fontSize: 15,
    },
    avatar: {
        marginRight: theme.spacing(1),
    },
    post: {
        paddingBottom: '70px'
    }
}));

function PostPreview() {
    const classes = useStyles();
    const account = useSelector((state) => state.account);
    const ctx = usePost();
    const { image, title, tags, markdownText } = ctx;

    return (
        <>
            {image && (
                <Box className={classes.box4}>
                    <img className={classes.imagePreview} src={image} alt="background"></img>
                </Box>
            )}
            <Box className={classes.box4}>
                <Typography variant="h2">
                    {title}
                </Typography>
            </Box>
            <Box display="flex" alignItems="center" className={classes.box3}>
                <Box>
                    <Avatar className={classes.avatar} src={account.user?.avatar}></Avatar>
                </Box>
                <Box>
                    <Typography variant="body1">{account.user?.name}</Typography>
                    <Typography variant="body2" color="textSecondary">Alguns segundos átras</Typography>
                </Box>
            </Box>
            <Box className={classes.box4}>
                <Typography variant="body1">
                    {tags?.map(item => item.title).join(',')}
                </Typography>
            </Box>
            <Divider></Divider>
            <div className={classes.post}>
                <ReactMarkdown children={markdownText} />
            </div>
        </>
    )
}

export default PostPreview;