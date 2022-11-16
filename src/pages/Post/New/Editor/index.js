import React, { useCallback } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Box from "@material-ui/core/Box";
import { makeStyles } from '@material-ui/core/styles';
import {useDropzone} from 'react-dropzone';

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

function PostEditor({image, setImage, title, setTitle, tags, setTags, markdownText, setMarkdownText}) {
    const classes = useStyles();

    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            const base64data = reader.result;
            setImage(base64data);
        };
      }, [setImage])
      
    const {getRootProps, getInputProps} = useDropzone({
        onDrop,
        multiple: false,
        accept: 'image/*',
    });
    
    return (
      <>
      <Box {...getRootProps()} mb={1} className={classes.box4}>
                                <input {...getInputProps()} />
                                <Button>Carregar Imagem</Button>
                            </Box>
                            {image && (
                                <Box className={classes.box5}>
                                    <img className={classes.image} src={image} alt="background"></img>
                                </Box>
                            )}
                            <Box className={classes.box6}>
                                <TextField id="title" placeholder="Título" fullWidth value={title} onChange={setTitle} />
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
                            <textarea onChange={setMarkdownText} value={markdownText} className={classes.editor}>Editor</textarea>
      </>  
    )
}

export default PostEditor;