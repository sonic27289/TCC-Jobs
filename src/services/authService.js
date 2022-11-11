import axios from '../utils/axios';
import decode from 'jwt-decode';

class AuthService {

    logIn = (email, password) => {

        // Promise é um objeto usado para processamento assíncrono. 
        // Uma Promise (de "promessa") representa um valor que pode estar disponível agora, no futuro ou nunca.
        return new Promise((resolve, reject) => {
            axios.post('/api/login', {email, password}) //enviando token pelo header da aplicação
            .then(response => {
                const token = response.data.token;
                if (token){
                    this.setToken(token)
                    const user = decode(token);
                    resolve(user)
                }
            })
            .catch(error => {
                reject(error)
            })
        })
    }
    //Classe para a Autenticação de Dados da Rede Social
    //Diversas Funções serão Atríbuidas 
    logOut = () => {
        this.removeToken();
    }

    setToken = (token) => {
        localStorage.setItem("accessToken", (token));
    }

    getToken = () => {
       return localStorage.getItem("accessToken")
    }

    removeToken = () => {
        localStorage.removeItem('accessToken')
    }

    // isAuthenticated = () => {
    //     return false;   
    // }
    
    isAuthenticated = () => {
        return !!this.getToken();    
    }
}

const authService = new AuthService();

export default authService;