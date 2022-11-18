import authService from "../services/authService";

export const LOGIN_SUCCESS = '@ACCOUNT/LOGIN_SUCCESS';
export const SILENT_LOGIN = '@ACCOUNT/SILENT_LOGIN';
export const LOGOUT = '@ACCOUNT/LOGOUT';
export const LOGUP = '@ACCOUNT/LOGUP';

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

const logUp = (fullName, email, password) => {
    return async (dispatch) => {
        const user = await authService.logUp(fullName, email, password)
        
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

export { logIn, logUp, logOut };