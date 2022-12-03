import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link"
import FormHelperText from '@material-ui/core/FormHelperText';
//import authService from "../../services/authService";
import { useDispatch } from "react-redux";
//import { useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from 'yup';
import { toast } from "react-toastify";
import './styles.css';

//import axios from '../../utils/axios';
//import axios from "axios";

import { useNavigate } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";

import { logUp } from "../../actions/accountActions";

const useStyles = makeStyles((theme) => ({
    root: {
        // display: 'flex',
        // flexDirection: 'row',
        height: '100vh',

    },
    image: {
        backgroundImage: 'url(/images/background/background2.png)',
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

function LogUp(){
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
       <Grid container className={classes.root}>
        <Grid 
            item 
            container
            direction="column"
            justifyContent="center"
            alignItems="center" 
            md={7}
            className={classes.image}>
            <Typography style={{color: '#fff', fontSize: 35, lineHeight: '45px'}} class="title">
                <strong>Simplificando a forma de conectar profissionais de diversas áreas !</strong>
            </Typography>
            <Typography variant="body2" style={{color: 'rgb(255,255,255, 0.7)', marginTop: 30, fontSize: 15, lineHeight: '30px'}} class="title2">
                Compartilhe seu conhecimento com toda nossa rede de profissionais.
            </Typography>
        </Grid>
        <Grid item md={5}>
            <Box className={classes.box}>
                <Avatar className={classes.avatar}>
                    <LockOpenIcon></LockOpenIcon>
                </Avatar>
                <Typography variant="h5">
                    <b>Registre-se: </b>
                </Typography>
                <Formik
                    initialValues={{
                        fullName: '',
                        username: '',
                        email: '',
                        password: ''
                    }}
                    validationSchema={Yup.object().shape({
                        fullName: Yup.string().max(255).required("Favor informar o nome completo"),
                        username: Yup.string().max(255).required("Favor informar o nome de usuário"),
                        email: Yup.string().email("Favor informar um e-mail válido.").max(255).required("Favor informar o e-mail"),
                        password: Yup.string().max(255).required("Favor informar a senha")
                    })}
                    onSubmit={async (values, {
                        setErrors,
                        setStatus,
                        setSubmitting
                    }) => {
                        try {
                            await dispatch(logUp(values.fullName, values.username, values.email, values.password));
                            navigate('/');
                            toast.success('Conta criada com Sucesso', {
                                position: "top-center",
                                autoClose: 7000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                            })
                            toast.info('Logue-se pela página de login para entrar em sua conta', {
                                position: "top-center",
                                autoClose: 7000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                            })
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
                                    id="fullName"
                                    label="Nome completo"
                                    name="fullName"
                                    autoComplete="fullName"
                                    autoFocus
                                    error={Boolean(errors.fullName)}
                                    value={values.fullName}
                                    onChange={handleChange}
                                    helperText={errors.fullName}
                                >
                                </TextField>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Nome de usuário"
                                    name="username"
                                    autoComplete="username"
                                    autoFocus
                                    error={Boolean(errors.username)}
                                    value={values.username}
                                    onChange={handleChange}
                                    helperText={errors.username}
                                >
                                </TextField>
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
                                    error={Boolean(errors.password)}
                                    value={values.password}
                                    onChange={handleChange}
                                    helperText={errors.password}
                                >
                                </TextField>
                                <Button fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    type="submit"
                                    disabled={isSubmitting}
                                    >Registrar
                                </Button>
                                {
                                    errors.submit &&
                                    <FormHelperText error>
                                        {errors.submit}
                                    </FormHelperText>
                                }
                                <Grid container className={classes.container}>
                                    <Grid item>
                                        <Link href="/login">Já possui uma conta? Clique aqui</Link>
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

export default LogUp;