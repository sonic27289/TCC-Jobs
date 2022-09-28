//import React from "react";
import { redirect } from "react-router-dom";
//import { useSelector } from "react-redux";

import authService from "../services/authService";
//import Home from "../pages/Home";

function AuthenticatedRoute() {
    const isAuthenticated = authService.isAuthenticated();
    //console.log(isAuthenticated);
    if(!isAuthenticated){
        throw redirect('/login')
    }
}

export default AuthenticatedRoute;