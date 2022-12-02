import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link"
import FormHelperText from '@material-ui/core/FormHelperText';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
//import authService from "../../services/authService";
import { useDispatch } from "react-redux";
//import { useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from 'yup';
import Header from "./Header2";
import { toast } from "react-toastify";

//import axios from '../../utils/axios';
//import axios from "axios";

import { useNavigate } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";

import { forgotPassword } from "../../actions/accountActions";
//import { Snackbar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        // display: 'flex',
        // flexDirection: 'row',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '100px'
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
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: theme.spacing(1)
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

// const buttons = [
//     { variant: 'sucess', message:"Sucesso"},
//     { variant: 'false', message: "Erro" }
// ]



function Copyright(){
    return (
        <Typography variant="body2" align="center">
            {'Copyright © '}
            <a color="inherit" href="/Iogin">
                TCC - HetoJobs
            </a>{' '}
            {new Date().getFullYear()} 
        </Typography>
    )
}

function ForgotPassword(){
    const classes = useStyles();
    const navigate = useNavigate();
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [errorMessage, setErrorMessage] = useState();
    const dispatch = useDispatch();
    

    //const account = useSelector(state => state.user)
    //console.log(account);

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

// async function HandleLogIn(){
//     //Chamada da API da Rede Social
//     try {
//         await dispatch(logIn(email, password));
//         navigate('/');
//         // await authService.logIn(email, password);
//         // // HTTP 200 - Código de Página "OK"
//         // navigate('/');
//     } catch (error){
//         console.log(error)
//         setErrorMessage(error.response.data.message);  
//     }

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
// }

    return (
        <div>
            <Header></Header>
       <Grid container className={classes.root}>
        {/* <Grid 
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
        </Grid> */}
        <Grid item className={classes.grid}>
            <Box className={classes.box}>
                <Avatar className={classes.avatar}>
                    <VpnKeyIcon></VpnKeyIcon>
                </Avatar>
                <Typography variant="h4">
                    <b>Encontre sua Conta: </b>
                </Typography>
                <Typography variant="h6">
                    Insira seu email para procurar a sua conta.
                </Typography>
                <Formik
                    initialValues={{
                        email: '',
                    }}
                    validationSchema={Yup.object().shape({
                        email: Yup.string().email("Favor informar um e-mail válido.").max(255).required("Favor informar o e-mail"),
                    })}
                    onSubmit={async (values, {
                        setErrors,
                        setStatus,
                        setSubmitting
                    }) => {
                        try {
                            await dispatch(forgotPassword(values.email));
                            if(values.email !== 'sonic27289@gmail.com'){
                                return (
                                    toast.error('Não foi possivel encontrar uma conta com esse e-mail', {
                                        position: "top-center",
                                        autoClose: 7000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                        theme: "light",
                                    }),
                                    toast.warn('Tente novamente', {
                                        position: "top-center",
                                        autoClose: 7000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                        theme: "light",
                                    })
                                )
                            }
                            toast.success('Conta localizada')
                            toast.info('Enviaremos um e-mail com instruções para redefinir sua senha')
                            navigate('/feed')
                            // await authService.logIn(email, password);
                            // // HTTP 200 - Código de Página "OK"
                            // navigate('/');
                        } catch (error){
                            const message = (error.response && error.response.data.message) || 'Alguma coisa deu errada';

                            setStatus({ sucess: false });
                            setErrors({ submit: message });
                            setSubmitting(false);
                        }
                    }}
                >
                    {
                        ({errors, handleChange, handleSubmit, isSubmitting, values}) => (
                            <form noValidate className={classes.form} onSubmit={handleSubmit}>
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
                                    error={Boolean(errors.email)}
                                    value={values.email}
                                    onChange={handleChange}
                                    helperText={errors.email}
                                >
                                </TextField>
                                {/* <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Senha"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    error={Boolean(errors.password)}
                                    value={values.password}
                                    onChange={handleChange}
                                    helperText={errors.password}
                                >
                                </TextField> */}
                                <Button fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    type="submit"
                                    disabled={isSubmitting}
                                    >Procurar
                                </Button>
                                {
                                    errors.submit &&
                                    <FormHelperText error>
                                        {errors.submit}
                                    </FormHelperText>
                                }
                                <Grid container className={classes.container}>
                                    <Grid item>
                                        <Link href="/logup">Não tem uma conta? Registre-se</Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href="/login">Ja possui uma conta? Logue-se</Link>
                                    </Grid>
                                </Grid>
                    </form>
                        )
                    }   
                </Formik>
                <Copyright></Copyright>
            </Box>
        </Grid>
       </Grid>
       </div>
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

export default ForgotPassword;