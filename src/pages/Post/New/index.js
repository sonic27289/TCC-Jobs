import React from "react";
// import { useSelector } from "react-redux";
import Header from "../../Home/components/Header";
import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/Autocomplete';
// import Typography from "@material-ui/core/Typography";
// import Divider from "@material-ui/core/Divider";
// import Avatar from "@material-ui/core/Avatar";
// import {useDropzone} from 'react-dropzone';
// import ReactMarkdown from "react-markdown";

import PostEditor from "./Editor";
import PostPreview from "./Preview";
import BottomBar from "./BottomBar";
import { PostProvider } from "../../../context/PostContext";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.dark
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
        height: ('calc(100vh - 160px)'),
        overflow: 'auto'
    },
    appBar: {
        top: 'auto',
        bottom: 0,
        alignItems: 'center',
    
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
    }
}));

// const arrayTags = [
//     { title: 'react.js', },
//     { title: 'node.js', },
//     { title: 'webdev', },
// ]

function NewPost(){
    const classes = useStyles();
    // const [image, setImage] = useState(null);
    // const [title, setTitle] = useState('');
    // const [tags, setTags] = useState([]);
    // const [markdownText, setMarkdownText] = useState('');
    // const account = useSelector((state) => state.account);

    // const onDrop = useCallback(acceptedFiles => {
    //     const file = acceptedFiles[0];
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     reader.onloadend = () => {
    //         const base64data = reader.result;
    //         setImage(base64data);
    //     };
    //   }, [])
      
    // const {getRootProps, getInputProps} = useDropzone({
    //     onDrop,
    //     multiple: false,
    //     accept: 'image/*',
    // });

    // const handleTitleChange = (event) => {
    //     setTitle(event.currentTarget.value);
    // }

    // const handleTagsChange = (event, values) => {
    //     setTags(values);
    // }

    // const handleMarkdownChange = (event) => {
    //     setMarkdownText(event.currentTarget.value);
    // }

    return ( 
        <PostProvider>
        <div className={classes.root}>
            <Header></Header>
            <div className={classes.toolbar}></div>
            <main className={classes.main}>
                    <Box display="flex" className={classes.box}>
                        <Box className={classes.box1}>
                            <PostEditor></PostEditor>
                        </Box>
                        <Box className={classes.box2}>
                            <PostPreview></PostPreview>
                        </Box>
                    </Box>
            </main>
        </div>
        <BottomBar></BottomBar>
        </PostProvider>
    )
}

export default NewPost;