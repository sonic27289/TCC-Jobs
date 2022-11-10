import axios from '../utils/axios';

class AuthService {

    logIn = (email, password) => {

        // Promise é um objeto usado para processamento assíncrono. 
        // Uma Promise (de "promessa") representa um valor que pode estar disponível agora, no futuro ou nunca.
        return new Promise((resolve, reject) => {
            axios.post('/api/home/login', {email, password}) //enviando token pelo header da aplicação
            .then(response => {
                if (response.data.user){
                    this.setToken('JWT')
                    resolve(response.data.user)
                } else {
                    reject(response.data.error)
                }
            })
            .catch(error => {
                reject(error)
            })
        })
    }
    //Classe para a Autenticação de Dados da Rede Social
    //Diversas Funções serão Atríbuidas 
    logInWithToken = () => {

        // Promise é um objeto usado para processamento assíncrono. 
        // Uma Promise (de "promessa") representa um valor que pode estar disponível agora, no futuro ou nunca.
        return new Promise((resolve, reject) => {
            axios.post('/api/home/me') //enviando token pelo header da aplicação
            .then(response => {
                if (response.data.user){
                    resolve(response.data.user)
                } else {
                    reject(response.data.error)
                }
            })
            .catch(error => {
                reject(error)
            })
        })
    }

    logOut = () => {
        this.removeToken();
    }

    setToken = (token) => {
        localStorage.setItem("accessToken", (token));
    }

    getToken = () => {
       localStorage.getItem("accessToken")
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