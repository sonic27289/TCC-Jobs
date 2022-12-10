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
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikd1c3Rhdm8gQmFyYm9zYSIsInVzZXJuYW1lIjoic29uaWMyNzI4OSIsImVtYWlsIjoic29uaWMyNzI4OUBnbWFpbC5jb20iLCJhY2Vzc1Rva2VuIjoieWVlaGFhdXciLCJhdmF0YXIiOiIvaW1hZ2VzL2F2YXRhcnMvcGVyZmlsMS5qcGciLCJqb2luZWRJbiI6IjA1IGRlIGRlemVtYnJvLCAyMDIyIiwid29yayI6IkRlc2Vudm9sdmVkb3IgRnJvbnQtRW5kIiwidG90YWxQb3N0IjoiMDQifQ.dIZItBEaMy5dZFmHn1i3Cs06QIBdnsmxAtdtVPnotCI";
    return[200, { token }]
});

mock.onPost('api/Iogin').reply((config) => {
    //console.log(config);
    const { email, password } = JSON.parse(config.data);
    //console.log(email, password);
    //const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikd1c3Rhdm8gQmFyYm9zYSIsInVzZXJuYW1lIjoic29uaWMyNzI4OSIsImVtYWlsIjoic29uaWMyNzI4OUBnbWFpbC5jb20iLCJhY2Vzc1Rva2VuIjoieWVlaGFhdXciLCJhdmF0YXIiOiIvaW1hZ2VzL2F2YXRhcnMvaWNvbmVwZXJmaWwuanBnIiwiam9pbmVkSW4iOiIwNSBkZSBkZXplbWJybywgMjAyMiIsIndvcmsiOiJEZXNlbnZvbHZlZG9yIEZyb250LUVuZCIsInRvdGFsUG9zdCI6IjA0In0.3uEK3j6_cy2JUQUXLHj7AGE-ZBGqOUiI6SMFcI_iuQM";

    if (email !== 'teste@gmail.com' || password !== 'teste'){
        return[400, { message: 'Seu e-mail ou senha estão incorretos' }]
    } 

    // const user = {
    //     id: 1,
    //     name: 'Gustavo Barbosa',
    //     username: 'sonic27289',
    //     email: 'sonic27289@gmail.com',
    //     avatar: '/images/avatars/iconeperfil.jpg'
    // }
    const token2 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6IkphY2tzb24gTGltYSIsInVzZXJuYW1lIjoiamFja3Nvbm9tYWdpY28iLCJlbWFpbCI6InRlc3RlQGdtYWlsLmNvbSIsImFjZXNzVG9rZW4iOiJ0ZXN0ZSIsImF2YXRhciI6Ii9pbWFnZXMvYXZhdGFycy9wZXJmaWwyLmpwZyIsImpvaW5lZEluIjoiMTMgZGUgZGV6ZW1icm8sIDIwMjIiLCJ3b3JrIjoiRGVzZW52b2x2ZWRvciBCYWNrLUVuZCIsInRvdGFsUG9zdCI6IjAwIn0.ZYPuIA9OmJZDqzdnPOtAz3ZI2RcaBB4oO1bXJJVGFSA";
    return[200, { token2 }]
});

mock.onGet('/api/home/user/sonic27289').reply(200, {
    id: 1,
    name: 'Gustavo Barbosa da Silva',
    username: 'sonic27289',
    email: 'sonic27289@gmail.com',
    acessToken: 'token',
    avatar: '/images/avatars/perfil1.jpg',
    joinedIn: '05 de dezembro, 2022',
    work: 'Desenvolvedor Front-End',
    followers: '02',
    following: '01',
    groups: '01',
    totalGroups: '00',
    totalPost: '04',
    totalFollowers: '02',
    totalFollowing: '01',
    totalFollowingAfter: '00',
    avaliations: '01',
    apresentation: 'Bem vindo ao meu perfil, meu nome é Gustavo Barbosa, minhas especialidades são HTML, CSS, Javascript, Typescript, React JS, PHP e SQL, sendo elas as minhas principais linguagens de programação. Também já trabalhei com XML, ASP.NET, Velocity, Java e estudei C#, C++, C e JavaWeb na universidade. Se eu puder ajudar, certamente o farei, se não puder, encontrarei uma maneira de ajudar.',
    tags: 'react.js, front-end, javascript'
});

mock.onGet('/api/home/user/jacksonomagico').reply(200, {
    id: 2,
    name: 'Jackson Lima Gregório',
    username: 'jacksonomagico',
    email: 'teste@gmail.com',
    acessToken: 'teste',
    avatar: '/images/avatars/perfil2.jpg',
    joinedIn: '13 de dezembro, 2022',
    work: 'Desenvolvedor Front-End',
    followers: '01',
    following: '01',
    groups: '01',
    totalGroups: '00',
    totalPost: '01',
    totalFollowers: '01',
    totalFollowing: '01',
    totalFollowingAfter: '00',
    avaliations: '01',
    apresentation: 'Bem vindo ao meu perfil, meu nome é Gustavo Barbosa, minhas especialidades são HTML, CSS, Javascript, Typescript, React JS, PHP e SQL, sendo elas as minhas principais linguagens de programação. Também já trabalhei com XML, ASP.NET, Velocity, Java e estudei C#, C++, C e JavaWeb na universidade. Se eu puder ajudar, certamente o farei, se não puder, encontrarei uma maneira de ajudar.',
    tags: 'react.js, front-end, javascript'
});