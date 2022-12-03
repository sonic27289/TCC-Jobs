import authService from "../services/authService";

export const LOGIN_SUCCESS = '@ACCOUNT/LOGIN_SUCCESS';
export const SILENT_LOGIN = '@ACCOUNT/SILENT_LOGIN';
export const LOGOUT = '@ACCOUNT/LOGOUT';
export const LOGUP = '@ACCOUNT/LOGUP';
export const FORGOTPASSWORD = '@ACCOUNT/FORGOTPASSWORD';

const logIn = (email, password) => {
    return async (dispatch) => {
        const user = await authService.logIn(email, password)
        
        dispatch({
            type: LOGIN_SUCCESS,
            payload: {
                user
            }
        })
    }
}

const logIn2 = (email, password) => {
    return async (dispatch) => {
        const user = await authService.logIn2(email, password)
        
        dispatch({
            type: LOGIN_SUCCESS,
            payload: {
                user
            }
        })
    }
}

const forgotPassword = (email) => {
    return async (dispatch) => {
        const user = await forgotPassword(email)
        
        dispatch({
            type: FORGOTPASSWORD,
            payload: {
                user
            }
        })
    }
}

const logUp = (fullName, username, email, password) => {
    return async (dispatch) => {
        const user = await authService.logUp(fullName, username, email, password)
        
        dispatch({
            type: LOGUP,
            payload: {
                user
            }
        })
    }
}

const logOut = () => {
    return async (dispatch) => {
        await authService.logOut();
        
        dispatch({
            type: LOGOUT
        })
    }
}

export { logIn, logIn2, logUp, logOut, forgotPassword };