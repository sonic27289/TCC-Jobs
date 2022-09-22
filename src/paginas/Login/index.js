import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        // display: 'flex',
        // flexDirection: 'row',
        height: '100vh',

    },
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

function LogIn(){
    const classes = useStyles();

    return (
       <Grid container className={classes.root}>
        <Grid 
            item 
            container
            direction="column"
            justify="center"
            alignItems="center" 
            md={7}>
            <Typography style={{color: '#fff', fontSize: 35, lineHeight: '45px'}}>
                <strong>Simplificando a forma de conectar desenvolvedores de Software !</strong>
            </Typography>
            <Typography variant="body2" style={{color: 'rgb(255,255,255, 0.7)', marginTop: 30, fontSize: 15, lineHeight: '30px'}}>
                Compartilhe seu conhecimento com toda nossa rede de desenvolvedores de software.
            </Typography>
        </Grid>
        <Grid item md={5}>

        </Grid>
        <Box></Box>
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