import mock from '../utils/mock';

mock.onPost('api/home/me').reply(200, {
    user: {
        'id': 1,
        'username': 'sonic27289',
        'email': 'sonic27289@gmail.com'
    }
});

mock.onPost('api/login').reply((config) => {
    //console.log(config);
    const { email, password } = JSON.parse(config.data);
    //console.log(email, password);
 
    if (email !=='sonic27289@gmail.com' || password !== 'sonic27289'){
        return[400, { message: 'Seu e-mail ou senha estão incorretos' }]
    }

    // const user = {
    //     id: 1,
    //     name: 'Gustavo Barbosa',
    //     username: 'sonic27289',
    //     email: 'sonic27289@gmail.com',
    //     avatar: '/images/avatars/iconeperfil.jpg'
    // }
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJuYW1lIjoiR3VzdGF2byBCYXJib3NhIiwidXNlcm5hbWUiOiJzb25pYzI3Mjg5IiwiZW1haWwiOiJzb25pYzI3Mjg5QGdtYWlsLmNvbSIsImF2YXRhciI6Ii9pbWFnZXMvYXZhdGFycy9pY29uZXBlcmZpbC5qcGcifQ.UfElcBRWRmUVFXs0ngj8EkrGQs-OIO1NHfVM-7620kQ";
    return[200, { token }]
});