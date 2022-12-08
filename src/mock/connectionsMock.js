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
      following: true,
    },
    {
      id: 2,
      user: {
        id: 2,
        name: 'Pedro Henrique de Oliveira Maia',
        username: 'flamethrower',
        avatar: '/images/avatars/iconeperfil3.jpg',
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
        name: 'Jackson Lima Gregorio',
        username: 'jacksonomagico',
        avatar: '/images/avatars/iconeperfil4.jpg',
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
      following: true,
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