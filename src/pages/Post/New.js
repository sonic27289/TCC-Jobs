import React, { useCallback, useState } from "react";
import Header from "../Home/components/Header";
import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import {useDropzone} from 'react-dropzone';
import ReactMarkdown from "react-markdown";


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
      alignItems: 'center'  
    },
    image: {
        height: 250,
    },
    imagePreview: {
        width: '100%'
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

const arrayTags = [
    { title: 'react.js', },
    { title: 'node.js', },
    { title: 'webdev', },
]

function NewPost(){
    const classes = useStyles();
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState([{title: 'react.js'}]);
    const [markdownText, setMarkdownText] = useState('');

    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            const base64data = reader.result;
            setImage(base64data);
        };
      }, [])
      
    const {getRootProps, getInputProps} = useDropzone({
        onDrop,
        multiple: false,
        accept: 'image/*',
    });

    const handleTitleChange = (event) => {
        setTitle(event.currentTarget.value);
    }

    const handleTagsChange = (event, values) => {
        setTags(values);
    }

    const handleMarkdownChange = (event) => {
        setMarkdownText(event.currentTarget.value);
    }

    return ( 
        <>
        <div className={classes.root}>
            <Header></Header>
            <div className={classes.toolbar}></div>
            <main className={classes.main}>
                    <Box display="flex" className={classes.box}>
                        <Box className={classes.box1}>
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <Button>Carregar Imagem</Button>
                            </div>
                            {image && <img className={classes.image} src={image} alt="background"></img>}
                            <TextField id="title" placeholder="Título" fullWidth value={title} onChange={handleTitleChange} />
                            <Autocomplete
                                multiple
                                id="tags-standard"
                                options={arrayTags}
                                getOptionLabel={(option) => option.title}
                                value={tags}
                                onChange={handleTagsChange}
                                renderInput={(params) => (
                                <TextField
                                    {...params}
                                    variant="standard"
                                    placeholder="Tags"
                                />
                                )}
                            />
                            <textarea onChange={handleMarkdownChange} className={classes.editor}>Editor</textarea>
                        </Box>
                        <Box className={classes.box2}>
                            {image && <img className={classes.imagePreview} src={image} alt="background"></img>}
                            <Typography variant="h2">
                                    {title}
                            </Typography>
                            <Box display="flex" alignItems="center" className={classes.box3}>
                                <Box>
                                    <Avatar className={classes.avatar}></Avatar>
                                </Box>
                                <Box>
                                    <Typography variant="body1">Gustavo Barbosa</Typography>
                                    <Typography variant="body2" color="textSecondary">10 meses atrás</Typography>
                                </Box>
                            </Box>
                            <Typography variant="body1">
                                    {tags.map(item => item.title).join(',')}
                            </Typography>
                            <Divider></Divider>
                            <div className={classes.post}>
                                <ReactMarkdown children={markdownText} />
                            </div>
                        </Box>
                    </Box>
            </main>
        </div>
        <AppBar position="fixed" color="inherit" className={classes.appBar}>
            <Toolbar>
                <Button className={classes.button}>Salvar rascunho</Button>
                <Button color="secondary" variant="outlined">Publicar</Button>
            </Toolbar>
        </AppBar>
        </>
    )
}

export default NewPost;