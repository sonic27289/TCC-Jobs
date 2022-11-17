import mock from '../utils/mock';

mock.onGet('/api/connections/followers/sonic27289').reply(200, {
  followers: [
    {
      id: 1,
      user: {
        id: 1,
        name: 'Fernanda Souza',
        username: 'fersouza10',
        avatar: '/images/avatars/iconeperfil2.jpg',
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