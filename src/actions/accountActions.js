import authService from "../services/authService";

export const LOGIN_SUCCESS = '@ACCOUNT/LOGIN_SUCCESS';
export const SILENT_LOGIN = '@ACCOUNT/SILENT_LOGIN';

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

export { logIn, setUserData };