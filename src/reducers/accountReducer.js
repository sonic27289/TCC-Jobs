import authService from '../services/authService';
import decode from 'jwt-decode';

import {
    LOGIN_SUCCESS,
    SILENT_LOGIN,
    LOGOUT
} from '../actions/accountActions';

const getUser = () => {
    const token = authService.getToken();
    console.log(token);
    if(!token){
        return null
    } 
    const user = decode(token);
    console.log(user);
    return user;
}

const INITIAL_STATE = {
    user: getUser()
}

const accountReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case LOGIN_SUCCESS: {
            return {
                ...state,
                user: action.payload.user
            }
        }
        case SILENT_LOGIN: {
            return {
                ...state,
                user: action.payload.user
            }
        }
        case LOGOUT: {
            return {
                ...state,
                user: null
            }
        }
        default: {
            return state;
        }
    }
}

export default accountReducer;