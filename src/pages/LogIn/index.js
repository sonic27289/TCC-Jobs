import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link"
import FormHelperText from '@material-ui/core/FormHelperText';
//import authService from "../../services/authService";
import { useSelector, useDispatch } from "react-redux";

//import axios from '../../utils/axios';
//import axios from "axios";

import { useNavigate } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";

import logIn from "../../actions/accountActions";

const useStyles = makeStyles((theme) => ({
    root: {
        // display: 'flex',
        // flexDirection: 'row',
        height: '100vh',

    },
    image: {
        backgroundImage: 'url(/images/loginbackground.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
        padding: theme.spacing(2),
        textAlign: 'center'
    },
    box: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: theme.spacing(8)

    },
    avatar: {
        background: theme.palette.primary.main,
        marginBottom: theme.spacing(1)
    },
    button: {
        marginTop: theme.spacing(1)
    },
    form: {
        margin: theme.spacing(2, 4)
    }
    // left: {
    //     background: 'blue',
    //     flexGrow: 0,
    //     flexBasis: '58%',

    //     display: 'flex',
    //     flexDirection: 'column',
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // },
    // right: {
    //     background: 'yellow',
    //     flexGrow: 0,
    //     flexBasis: '42%'
    // },
    // form: {
    //     display: 'flex',
    //     flexDirection: 'column',
    //     margin: '64px 32px',
    //     alignItems: 'center',

    // }
}));



function Copyright(){
    return (
        <Typography variant="body2" align="center">
            {'Copyright © '}
            <a color="inherit" href="/login">
                Gustavo Barbosa
            </a>{' '}
            {new Date().getFullYear()} 
        </Typography>
    )
}

function LogIn(){
    const classes = useStyles();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState();
    const dispatch = useDispatch();

    const account = useSelector(state => state.user)
    console.log(account);

    //function HandleLogIn(){
    //Chamada da API da Rede Social
    

    //Obj Promise

    //axios.post('api/home/login')
        //.then(response => console.log(response));
    // axios.get('https://api.github.com/users/sonic27289')
    //     .then(response => {
    //         console.log(response.data)

    //         //const user = response.data.login; //sonic27289
    //     })
    //     .catch(error => {
    //         console.log("Ocorreu um Erro !")
    //     })
//}

async function HandleLogIn(){
    //Chamada da API da Rede Social
    try {
        await dispatch(logIn(email, password));
        navigate('/');
        // await authService.logIn(email, password);
        // // HTTP 200 - Código de Página "OK"
        // navigate('/');
    } catch (error){
        // console.log(error)
        setErrorMessage(error.response.data.message);  
    }

    // const response = await axios.post('api/home/login', { email:'sonic27289@gmail.com', password: 'sonic27289'});
    // console.log(response);
    // axios.get('https://api.github.com/users/sonic27289')
    //     .then(response => {
    //         console.log(response.data)

    //         //const user = response.data.login; //sonic27289
    //     })
    //     .catch(error => {
    //         console.log("Ocorreu um Erro !")
    //     })
}

    return (
       <Grid container className={classes.root}>
        <Grid 
            item 
            container
            direction="column"
            justifyContent="center"
            alignItems="center" 
            md={7}
            className={classes.image}>
            <Typography style={{color: '#fff', fontSize: 35, lineHeight: '45px'}}>
                <strong>Simplificando a forma de conectar desenvolvedores de Software !</strong>
            </Typography>
            <Typography variant="body2" style={{color: 'rgb(255,255,255, 0.7)', marginTop: 30, fontSize: 15, lineHeight: '30px'}}>
                Compartilhe seu conhecimento com toda nossa rede de desenvolvedores de software.
            </Typography>
        </Grid>
        <Grid item md={5}>
            <Box className={classes.box}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon></LockOutlinedIcon>
                </Avatar>
                <Typography variant="h5">
                    <b>Acesso: </b>
                </Typography>
                <form className={classes.form}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="E-mail"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    >
                    </TextField>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Senha"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    >
                    </TextField>
                    <Button fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={HandleLogIn}
                        >Entrar
                    </Button>
                    {
                        errorMessage &&
                        <FormHelperText error>
                            {errorMessage}
                        </FormHelperText>
                    }
                    <Grid container>
                        <Grid item>
                            <Link>Esqueceu sua senha? </Link>
                        </Grid>
                        <Grid item>
                            <Link>Não tem uma conta? Registre-se</Link>
                        </Grid>
                    </Grid>
                </form>
                <Copyright></Copyright>
            </Box>
        </Grid>
       </Grid>
        // /* Flex Container */
        // <div className={classes.root}>
        //     {/* Flex Item / Container */}
        //     <div className={classes.left}>
        //         <Typography style={{color: '#fff', fontSize: 35, lineHeight: '45px'}}>
        //             <strong>Teste aaaaaaaaaaaaaaaaa Teste aaaaaaaaaaaaaaaaaa</strong>
        //         </Typography>
        //         <Typography variant="body2" style={{color: 'rgb(255,255,255, 0.7)', marginTop: 30, fontSize: 15, lineHeight: '30px'}}>
        //             Compartilhe o CONHECIMETO ET BILUUU MEU AMIIGo
        //         </Typography>
        //     </div>
        //     {/* Flex Item  */}
        //     <div className={classes.right}>
        //         <form className={classes.form}>
        //             <h2>Acesso</h2>
        //             <input type="text"></input>
        //             <input type="text"></input>
        //         </form>
        //     </div>
        // </div>
    )
}

export default LogIn;