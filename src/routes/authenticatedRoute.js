//import React from "react";
import { redirect } from "react-router-dom";

import authService from "../services/authService";
//import Home from "../pages/Home";

export function authenticatedRoute() {
    const isAuthenticated = authService.isAuthenticated();
    //console.log(isAuthenticated);
    if(!isAuthenticated){
        throw redirect('/login')
    }
}

export function redirectIfLogged(){
    const isAuthenticated = authService.isAuthenticated();

    if(isAuthenticated){
        throw redirect('/')
    }
}