import mock from '../utils/mock';

mock.onGet('/api/connections/followers/sonic27289').reply(200, {
  followers: [
    {
      id: 1,
      user: {
        id: 1,
        name: 'Jackson Lima Gregorio',
        username: 'jacksonomagico',
        avatar: '/images/avatars/iconeperfil4.jpg',
      },
      following: false,
    },
    {
      id: 2,
      user: {
        id: 2,
        name: 'Lucas Fernando',
        username: 'lucfernando',
        avatar: '/images/avatars/iconeperfil3.jpg',
      },
      following: true,
    },
    {
      id: 3,
      user: {
        id: 3,
        name: 'Matheus Henrique',
        username: 'm_henriques',
        avatar: '/images/avatars/iconeperfil4.jpg',
      },
      following: false,
    },
    {
      id: 4,
      user: {
        id: 4,
        name: 'Cleber Henrique',
        username: 'cleberh_11',
        avatar: '/images/avatars/iconeperfil5.jpg',
      },
      following: false,
    },
  ],
});

mock.onGet('/api/connections/following/sonic27289').reply(200, {
  following: [
    {
      id: 1,
      user: {
        id: 1,
        name: 'Fernanda Souza',
        username: 'fersouza10',
        avatar: '/images/avatars/iconeperfil2.jpg',
      },
    },
    {
      id: 2,
      user: {
        id: 2,
        name: 'Lucas Fernando',
        username: 'lucfernando',
        avatar: '/images/avatars/iconeperfil3.jpg',
      },
    },
    {
      id: 3,
      user: {
        id: 3,
        name: 'Matheus Henrique',
        username: 'm_henriques',
        avatar: '/images/avatars/iconeperfil4.jpg',
      },
    },
    {
      id: 4,
      user: {
        id: 4,
        name: 'Cleber Henrique',
        username: 'cleberh_11',
        avatar: '/images/avatars/iconeperfil5.jpg',
      },
    },
  ],
});

mock.onGet('/api/connections/groups/sonic27289').reply(200, {
  following: [
    {
      id: 1,
      user: {
        id: 1,
        name: 'IFSP',
        username: 'Instituto Federal de Educação, Ciência e Tecnologia de São Paulo',
        avatar: '/images/avatars/ifsp.png',
      },
    },
  ],
});

mock.onGet('/api/connections/followers/jacksonomagico').reply(200, {
  followers: [
    {
      id: 1,
      user: {
        id: 1,
        name: 'Gustavo Barbosa da Silva',
        username: 'sonic27289',
        avatar: '/images/avatars/iconeperfil.jpg',
      },
      following: false,
    },
  ],
});

mock.onGet('/api/connections/following/jacksonomagico').reply(200, {
  following: [
    {
      id: 1,
      user: {
        id: 1,
        name: 'Gustavo Barbosa da Silva',
        username: 'sonic27289',
        avatar: '/images/avatars/iconeperfil.jpg',
      },
      following: false,
    },  
  ],
});

mock.onGet('/api/connections/groups/jacksonomagico').reply(200, {
  following: [
    {
      id: 1,
      user: {
        id: 1,
        name: 'IFSP',
        username: 'Instituto Federal de Educação, Ciência e Tecnologia de São Paulo',
        avatar: '/images/avatars/ifsp.png',
      },
    },
  ],
});