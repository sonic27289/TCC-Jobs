import axios from '../utils/axios';

class AuthService {
    //Classe para a Autenticação de Dados da Rede Social
    //Diversas Funções serão Atríbuidas 
    logIn = (email, password) => {

        // Promise é um objeto usado para processamento assíncrono. 
        // Uma Promise (de "promessa") representa um valor que pode estar disponível agora, no futuro ou nunca.
        return new Promise((resolve, reject) => {
            axios.post('/api/home/login', {email, password})
            .then(response => {
                if (response.data.user){
                    //this.setUser(response.data.user)
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

    setUser = (user) => {
        localStorage.setItem("user", JSON.stringify(user));
    }

    getUser = () => {
        const user = localStorage.getItem("user");
        if (user){
            return JSON.parse(user)
        }
        return user;
    }

    // isAuthenticated = () => {
    //     return false;   
    // }
    
    isAuthenticated = () => {
        return !!this.getUser();    
    }
}

const authService = new AuthService();

export default authService;