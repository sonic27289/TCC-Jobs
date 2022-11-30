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
    //const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikd1c3Rhdm8gQmFyYm9zYSIsInVzZXJuYW1lIjoic29uaWMyNzI4OSIsImVtYWlsIjoic29uaWMyNzI4OUBnbWFpbC5jb20iLCJhY2Vzc1Rva2VuIjoieWVlaGFhdXciLCJhdmF0YXIiOiIvaW1hZ2VzL2F2YXRhcnMvaWNvbmVwZXJmaWwuanBnIiwiam9pbmVkSW4iOiIwNSBkZSBkZXplbWJybywgMjAyMiIsIndvcmsiOiJEZXNlbnZvbHZlZG9yIEZyb250LUVuZCIsInRvdGFsUG9zdCI6IjA0In0.3uEK3j6_cy2JUQUXLHj7AGE-ZBGqOUiI6SMFcI_iuQM";

    if (email !== 'sonic27289@gmail.com' || password !== 'sonic27289'){
        return[400, { message: 'Seu e-mail ou senha estão incorretos' }]
    } 

    // const user = {
    //     id: 1,
    //     name: 'Gustavo Barbosa',
    //     username: 'sonic27289',
    //     email: 'sonic27289@gmail.com',
    //     avatar: '/images/avatars/iconeperfil.jpg'
    // }
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikd1c3Rhdm8gQmFyYm9zYSIsInVzZXJuYW1lIjoic29uaWMyNzI4OSIsImVtYWlsIjoic29uaWMyNzI4OUBnbWFpbC5jb20iLCJhY2Vzc1Rva2VuIjoieWVlaGFhdXciLCJhdmF0YXIiOiIvaW1hZ2VzL2F2YXRhcnMvaWNvbmVwZXJmaWwuanBnIiwiam9pbmVkSW4iOiIwNSBkZSBkZXplbWJybywgMjAyMiIsIndvcmsiOiJEZXNlbnZvbHZlZG9yIEZyb250LUVuZCIsInRvdGFsUG9zdCI6IjA0In0.3uEK3j6_cy2JUQUXLHj7AGE-ZBGqOUiI6SMFcI_iuQM";
    return[200, { token }]
});

// mock.onPost('api/login').reply((config) => {
//     //console.log(config);
//     const { email, password } = JSON.parse(config.data);
//     //console.log(email, password);
 
//     if (email !=='sonic27289@gmail.com' || password !== 'sonic272891'){
//         return[400, { message: 'Seu e-mail ou senha estão incorretos' }]
//     }

//     // const user = {
//     //     id: 1,
//     //     name: 'Gustavo Barbosa',
//     //     username: 'sonic27289',
//     //     email: 'sonic27289@gmail.com',
//     //     avatar: '/images/avatars/iconeperfil.jpg'
//     // }
//     const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkJ1c3Rhdm8gR2FyYm9zYSIsInVzZXJuYW1lIjoic29uaWMyNzI4OSIsImVtYWlsIjoic29uaWMyNzI4OUBnbWFpbC5jb20iLCJhY2Vzc1Rva2VuIjoieWVlaGFhdXciLCJhdmF0YXIiOiIvaW1hZ2VzL2F2YXRhcnMvaWNvbmVwZXJmaWwyLmpwZyIsImpvaW5lZEluIjoiMDUgZGUgZGV6ZW1icm8sIDIwMjIiLCJ3b3JrIjoiRGVzZW52b2x2ZWRvciBGcm9udC1FbmQiLCJ0b3RhbFBvc3QiOiIwNCJ9.LnLbu1KQgFQGVK4ICwMGIJVHPsD63_tOG-sxerkKBb8";
//     return[200, { token }]
// });

mock.onGet('/api/home/user/sonic27289').reply(200, {
    id: 1,
    name: 'Gustavo Barbosa',
    username: 'sonic27289',
    email: 'sonic27289@gmail.com',
    acessToken: 'token',
    avatar: '/images/avatars/iconeperfil.jpg',
    joinedIn: '05 de dezembro, 2022',
    work: 'Desenvolvedor Front-End',
    totalPost: '04',
});

mock.onGet('/api/home/user/sonic272891').reply(200, {
    id: 1,
    name: 'Gustavo Barbosa',
    username: 'sonic27289',
    email: 'sonic27289@gmail.com',
    acessToken: 'token',
    avatar: '/images/avatars/iconeperfil.jpg',
    joinedIn: '05 de dezembro, 2022',
    work: 'Desenvolvedor Front-End',
    totalPost: '04',
});