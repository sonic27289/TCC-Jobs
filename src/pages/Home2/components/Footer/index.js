import React from "react";
import Typography from "@material-ui/core/Typography";

import './styles3.css';

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

function Footer(){
    return(
        <section className="footer">
            <hr className="footer-separacao"></hr>
                <section className="footer-media">
                    <a href="https://github.com/sonic27289/TCC-Jobs" target="_blank" rel="noopener noreferrer">GitHub</a>
                </section>
                <section className="footer-info">
                    <section className="footer1">
                        <section className="footer-name">
                            TCC - HetoJobs
                        </section>
                        <section className="footer-returns">
                            <a href="https://github.com/sonic27289/TCC-Jobs">Termos e Condições</a>
                        </section>
                    </section>
                    <section className="footer2" align="center">
                        <section className="footer-email">
                            TCCHetoJobs@gmail.com
                        </section>
                        <section className="footer-termos">
                            <a href="https://github.com/sonic27289/TCC-Jobs">Políticas de Segurança</a>
                            <br></br>
                            <br></br>
                            <Copyright></Copyright>
                        </section>
                    </section>
                    <section className="footer3">
                        <section className="footer-numero">
                            (11) 95406-5059
                        </section>
                        <section className="footer-contato">
                            Entre em contato
                        </section>
                    </section>
                </section>
                <hr className="footer-separacao"></hr>
        </section>
    )
}

export default Footer;