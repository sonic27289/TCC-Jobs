import moment from 'moment';
import mock from '../utils/mock';

mock.onGet('/api/').reply(200, {
  posts: [
    {
      id: 1,
      title:
        'COMO MELHORAR SEU CODIGO JAVASCRIPT (MELHORES CURSOS) | Dicas de Cursos Qualificados #01',
      slug: 'como-melhorar-seu-codigo-javascript',
      date: moment().subtract(1, 'day').toDate().getTime(),
      author: {
        id: 1,
        name: 'Gustavo Barbosa',
        avatar: '/images/avatars/perfil1.jpg',
      },
      tags: ['javascript', 'cursos', 'vscode'],
      image: '/images/posts/postalura.png',
      likes: 1,
      likesAfter: 2,
      comments: 1,
    },
    {
      id: 2,
      title: 'IFSP - CAMPUS CUBATÃO | Um ótimo ambiente para a formação de profissionais qualificados',
      slug: 'ifsp-campus-cubatao',
      date: moment().subtract(2, 'day').toDate().getTime(),
      author: {
        id: 1,
        name: 'Gustavo Barbosa',
        avatar: '/images/avatars/perfil1.jpg',
      },
      tags: ['ifsp', 'cubatao'],
      image: '/images/posts/postifsp.jpg',
      likes: 0,
      likesAfter: 1,
      comments: 1,
    },
    {
      id: 3,
      title: 'COMO ESCOLHER SUA PROFISSÃO | Nossa rede social é um ótimo ambiente para se conectar com profissionais de diversas áreas',
      slug: 'como-escolher-sua-profissao',
      date: moment().subtract(3, 'day').toDate().getTime(),
      author: {
        id: 1,
        name: 'Gustavo Barbosa',
        avatar: '/images/avatars/perfil1.jpg',
      },
      tags: ['ifsp', 'cubatao'],
      image: '/images/posts/postprofissao.jpg',
      likes: 0,
      likesAfter: 1,
      comments: 1,
    },
  ],
});

mock.onGet('/api/feed').reply(200, {
  posts: [
    {
      id: 1,
      title:
        'COMO MELHORAR SEU CODIGO JAVASCRIPT (MELHORES CURSOS) | Dicas de Cursos Qualificados #01',
      slug: 'como-melhorar-seu-codigo-javascript',
      date: moment().subtract(1, 'day').toDate().getTime(),
      author: {
        id: 1,
        name: 'Gustavo Barbosa',
        avatar: '/images/avatars/perfil1.jpg',
      },
      tags: ['eslint', 'prettier', 'editorconfig', 'vscode'],
      image: '/images/posts/postalura.png',
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
        avatar: '/images/avatars/perfil1.jpg',
      },
      tags: ['reactjs', 'javascript'],
      image: '/images/posts/imagempost2.png',
      likes: 5,
      comments: 1,
    },
    {
      id: 3,
      title: 'COMO MIGRAR PARA REACT HOOKS | Tips & Tricks - React.js #01',
      slug: 'como-migrar-para-react-hooks',
      date: moment().subtract(1, 'day').toDate().getTime(),
      author: {
        id: 1,
        name: 'Gustavo Barbosa',
        avatar: '/images/avatars/perfil1.jpg',
      },
      tags: ['reactjs', 'javascript'],
      image: '/images/posts/imagempost2.png',
      likes: 5,
      comments: 1,
    }
  ],
});

mock.onGet('/api/post/como-melhorar-seu-codigo-javascript').reply(200, {
  id: 1,
  title:
    'COMO MELHORAR SEU CODIGO JAVASCRIPT (MELHORES CURSOS) | Dicas de Cursos Qualificados #01',
  slug: 'como-melhorar-seu-codigo-javascript',
  date: moment().subtract(1, 'day').toDate().getTime(),
  author: {
    id: 1,
    name: 'Gustavo Barbosa',
    avatar: '/images/avatars/perfil1.jpg',
  },
  markdownText: `
  _Compact style:_
  
  Term 1
    ~ Definition 1
  
  Term 2
    ~ Definition 2a
    ~ Definition 2b`,
  tags: ['javascript', 'cursos', 'vscode'],
  image: '/images/posts/postalura.png',
  likes: 2,
  comments: 1,
});

mock.onGet('/api/post/como-migrar-para-react-hooks').reply(200, {
  id: 2,
  title:
    'COMO MIGRAR PARA REACT HOOKS | Tips & Tricks - React.js #01',
  slug: 'como-migrar-para-react-hooks',
  date: moment().subtract(1, 'dia').toDate().getTime(),
  author: {
    id: 1,
    name: 'Gustavo Barbosa',
    avatar: '/images/avatars/perfil1.jpg',
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
  likes: 5,
  comments: 10,
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
        avatar: '/images/avatars/perfil1.jpg',
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
        avatar: '/images/avatars/perfil1.jpg',
      },
      tags: ['reactjs', 'javascript'],
      image: '/images/posts/imagempost2.png',
      likes: 5,
      comments: 1,
    }
  ],
});

mock.onGet('/api/posts/user/jacksonomagico').reply(200, {
  posts1: [
    {
      id: 1,
      title:
        'TESTE',
      slug: 'como-melhorar-seu-codigo-javascript',
      date: moment().subtract(1, 'day').toDate().getTime(),
      author: {
        id: 1,
        name: 'Gustavo Barbosa',
        avatar: '/images/avatars/perfil2.jpg',
      },
      tags: ['eslint', 'prettier', 'editorconfig', 'vscode'],
      image: '/images/posts/imagempost1.jpg',
      likes: 10,
      comments: 30,
    },
  ],
});