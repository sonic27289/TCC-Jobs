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
    totalFollowing: '00',
    totalFollowingAfter: '01',
    avaliations: '01',
    apresentation: 'Bem vindo ao meu perfil, meu nome é Gustavo Barbosa, minhas especialidades são HTML, CSS, Javascript, Typescript, React JS, PHP e SQL, sendo elas as minhas principais linguagens de programação. Também já trabalhei com XML, ASP.NET, Velocity, Java e estudei C#, C++, C e JavaWeb na universidade. Se eu puder ajudar, certamente o farei, se não puder, encontrarei uma maneira de ajudar.',
    formationImg1: 'images/formacao/ifspformacao.png',
    formation1: 'IFSP - Instituto Federal de Educação, Ciência e Tecnologia de São Paulo - IFSP Tecnólogo',
    formation2: 'Graduação em Análise e Desenvolvimento de Sistemas / 2017 - 2020',
    formationImg2: 'images/formacao/etecformacao.png',
    formation3: 'ETEC - Escola Técnica Estadual - Tecnólogo',
    formation4: 'Tecnólogo em Informática para Internet / 2014 - 2017',
    tags: 'javascript, profissao, ifsp'
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
    apresentation: 'Sou um programador em inicio de carreira. Atualmente conheço as linguagens C#, Java e javascript. Também trabalho em React.Js e Node.Js. Pode ver alguns dos meus projetos no meu portfólio no GitHub(https://github.com/JacksonGregorio).',
    formationImg1: 'images/formacao/ifspformacao.png',
    formation1: 'IFSP - Instituto Federal de Educação, Ciência e Tecnologia de São Paulo - IFSP Tecnólogo',
    formation2: 'Bacharelado em Análise e Desenvolvimento de Sistemas / 2017 - 2020',
    formationImg2: 'images/formacao/etecformacao.png',
    formation3: 'ETEC - Escola Técnica Estadual de São Paulo - Curso Técnico',
    formation4: 'Curso Técnico Integrado em Gestão da Cadeia de Suprimentos e Logística / 2016 - 2018',
    tags: 'design, java'
});

mock.onGet('/api/home/user/tuler').reply(200, {
    id: 3,
    name: 'Wellington Tuler Moraes',
    username: 'tulermoraes',
    email: 'wellingtontm@ifsp.edu.br',
    acessToken: 'teste1',
    avatar: '/images/avatars/tulericon.jpg',
    joinedIn: '11 de dezembro, 2022',
    work: 'Professor no Instituto Federal',
    followers: '00',
    following: '00',
    groups: '00',
    totalGroups: '00',
    totalPost: '00',
    totalFollowers: '01',
    totalFollowing: '00',
    totalFollowingAfter: '00',
    avaliations: '00',
    apresentation: 'Masters Degree. 20+ years of IT experience. 17+ years of teaching experience.  3+ years of experience coordinating large IT Systems Projects from initiation to closure on a Global Company. Implementation of greenfield and brownfield Terminal TOS System. Experience with core IT infrastructure components, database and service concepts. Experience managing conflict, escalations, negotiating compromise and influencing others and problem solving. Proficiency in Portuguese, English and medium compreension of spanish. Strong oral and written communication skills Ability to successfully manage cross-functional projects involving multiple stakeholders and varying levels of management Experience as a leader and mentor for project and carreer. Experience in Port, manufacturing, logistics, warehouse and education environments. High-level knowledge in: Systems Administration, Database Administration and System coordination. Proficiency with MS Project, Excel, Jira agile, Object Pascal - Delphi, C#, C, Java, ASP, HTML, XML, PL/SQL and JavaScript.',
    formationImg1: 'images/formacao/unisanta.png',
    formation1: 'Universidade Santa Cecília',
    formation2: 'Masters degree, Digital Image Processing / 2014 - 2016',
    formationImg2: 'images/formacao/unisantos.jpg',
    formation3: 'Universidade Católica de Santos',
    formation4: 'MBA, IT Management / 2006 - 2007',
    tags: 'java, ifsp'
});