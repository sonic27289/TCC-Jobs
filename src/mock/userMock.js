import mock from '../utils/mock';

// mock.onPost('api/home/login').reply(200, {
//     'id': 1,
//     'username': 'sonic27289',
//     'email': 'sonic27289@gmail.com'
// });

mock.onPost('api/home/login').reply((config) => {
    console.log(config);
    const { email, password } = JSON.parse(config.data);
    console.log(email, password);
 
    if (email !=='sonic27289@gmail.com' || password !== 'sonic27289'){
        return[400, { message: 'Seu e-mail ou senha estão incorretos, tente novamente !' }]
    }

    const user = {
        id: 1,
        name: 'Gustavo Barbosa',
        username: 'sonic27289',
        email: 'sonic27289@gmail.com'
    }

    return[200, { user }]
});