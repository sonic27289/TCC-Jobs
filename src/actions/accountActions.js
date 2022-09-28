import authService from "../services/authService";

const logIn = (email, password) => {
    return async (dispatch) => {
        const user = await authService.logIn(email, password)
        
        dispatch({
            type: 'LOGIN_SUCESS',
            payload: {
                user
            }
        })
    }
}

export default logIn;