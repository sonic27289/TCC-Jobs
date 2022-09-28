//import React from "react";
import { redirect } from "react-router-dom";
import { useSelector } from "react-redux";

//import authService from "../services/authService";
//import Home from "../pages/Home";


function RedirectIfLogged(){
    //const isAuthenticated = authService.isAuthenticated();
    const user = useSelector(state => state.user);
    const isAuthenticated = Boolean(user);

    if(isAuthenticated){
        throw redirect('/')
    }
}

export default RedirectIfLogged;