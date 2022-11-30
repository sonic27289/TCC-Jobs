import React, { useCallback } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Box from "@material-ui/core/Box";
import { makeStyles } from '@material-ui/core/styles';
import {useDropzone} from 'react-dropzone';
import './styles.css';

import { usePost} from "../../../../context/PostContext";
import Title from "./Title";

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
        padding: 8,
        
    },
    box2: {
        width: '50%',
        height: '100%',
        padding: 8,
        
    },
    box3: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 16,
        
    },
    box4: {
        marginBottom: 16,
        
    },
    box5: {
        marginBottom: 16,
        
    },
    box6: {
        marginBottom: 16,
        
    },
    box7: {
        marginBottom: 16,
        
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
        color: theme.palette.primary,
        backgroundColor: theme.palette.background.dark,
        paddingBottom: '100px'
    },
    avatar: {
        marginRight: theme.spacing(1),
    },
    darkmode: {
        color: theme.palette.primary
    }
}));

const arrayTags = [
    { title: 'react.js', },
    { title: 'node.js', },
    { title: 'webdev', },
]

function PostEditor() {
    const classes = useStyles();
    const ctx = usePost();
    const {
        image,
        setImage,
        tags,
        setTags,
        markdownText,
        setMarkdownText } = ctx;

    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            const base64data = reader.result;
            setImage(base64data);
        };
      }, [setImage]);
      
    const {getRootProps, getInputProps} = useDropzone({
        onDrop,
        multiple: false,
        accept: 'image/*',
    });
    
    return (
      <div className={classes.root}>
      <Box {...getRootProps()} mb={1} className={classes.box4}>
                                <input {...getInputProps()} />
                                <Button className={classes.darkmode} color="primary">Carregar Imagem</Button>
                            </Box>
                            {image && (
                                <Box className={classes.box5}>
                                    <img className={classes.image} class="image" src={image} alt="background"></img>
                                </Box>
                            )}
                            <Box className={classes.box6}>
                               <Title></Title>
                            </Box>
                            <Box className={classes.box7}>
                            <Autocomplete
                                multiple
                                id="tags-standard"
                                options={arrayTags}
                                getOptionLabel={(option) => option.title}
                                value={tags}
                                onChange={setTags}
                                renderInput={(params) => (
                                <TextField
                                    {...params}
                                    variant="standard"
                                    placeholder="Tags"
                                />
                                )}
                            />
                            </Box>
                            <textarea onChange={setMarkdownText} value={markdownText} className={classes.editor} placeholder="Escreva sua Publicação"></textarea>
      </div>  
    )
}

export default PostEditor;