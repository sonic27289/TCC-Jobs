import authService from "../services/authService";

export const LOGIN_SUCCESS = '@ACCOUNT/LOGIN_SUCCESS';
export const SILENT_LOGIN = '@ACCOUNT/SILENT_LOGIN';
export const LOGOUT = '@ACCOUNT/LOGOUT';

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

const setUserData = () => {
    return async (dispatch) => {
        const user = await authService.logInWithToken();
        
        dispatch({
            type: SILENT_LOGIN,
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

export { logIn, setUserData, logOut };