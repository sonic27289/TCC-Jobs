import moment from 'moment';
import mock from '../utils/mock';

mock.onGet('/api/post/como-melhorar-seu-codigo-javascript').reply(200, {
  id: 1,
  title:
    'COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
  slug: 'como-melhorar-seu-codigo-javascript',
  date: moment().subtract(1, 'day').toDate().getTime(),
  author: {
    id: 1,
    name: 'Gustavo Barbosa',
    avatar: '/images/avatars/iconeperfil.jpg',
  },
  markdownText: `
  _Compact style:_
  
  Term 1
    ~ Definition 1
  
  Term 2
    ~ Definition 2a
    ~ Definition 2b`,
  tags: ['eslint', 'prettier', 'editorconfig', 'vscode'],
  image: '/images/posts/imagempost1.jpg',
  likes: 10,
  comments: 30,
});

mock.onGet('/api/feed').reply(200, {
  posts: [
    {
      id: 1,
      title:
        'COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
      slug: 'como-melhorar-seu-codigo-javascript',
      date: moment().subtract(1, 'day').toDate().getTime(),
      author: {
        id: 1,
        name: 'Gustavo Barbosa',
        avatar: '/images/avatars/iconeperfil.jpg',
      },
      tags: ['eslint', 'prettier', 'editorconfig', 'vscode'],
      image: '/images/posts/imagempost1.jpg',
      likes: 10,
      comments: 30,
    },
    {
      id: 2,
      title: 'COMO MIGRAR PARA REACT HOOKS | Tips & Tricks - React.js #01',
      slug: 'como-migrar-para-react-hooks',
      date: moment().subtract(1, 'day').toDate().getTime(),
      author: {
        id: 1,
        name: 'Gustavo Barbosa',
        avatar: '/images/avatars/iconeperfil.jpg',
      },
      tags: ['reactjs', 'javascript'],
      image: '/images/posts/imagempost2.png',
      likes: 5,
      comments: 1,
    },
  ],
});

mock.onGet('/api/posts/user/sonic27289').reply(200, {
  posts1: [
    {
      id: 1,
      title:
        'COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
      slug: 'como-melhorar-seu-codigo-javascript',
      date: moment().subtract(1, 'day').toDate().getTime(),
      author: {
        id: 1,
        name: 'Gustavo Barbosa',
        avatar: '/images/avatars/iconeperfil.jpg',
      },
      tags: ['eslint', 'prettier', 'editorconfig', 'vscode'],
      image: '/images/posts/imagempost1.jpg',
      likes: 10,
      comments: 30,
    },
    {
      id: 2,
      title: 'COMO MIGRAR PARA REACT HOOKS | Tips & Tricks - React.js #01',
      slug: 'como-migrar-para-react-hooks',
      date: moment().subtract(1, 'day').toDate().getTime(),
      author: {
        id: 1,
        name: 'Gustavo Barbosa',
        avatar: '/images/avatars/iconeperfil.jpg',
      },
      tags: ['reactjs', 'javascript'],
      image: '/images/posts/imagempost2.png',
      likes: 5,
      comments: 1,
    },
  ],
});