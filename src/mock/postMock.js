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
        name2: 'Gustavo Barbosa da Silva',
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
        name2: 'Gustavo Barbosa da Silva',
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
        name2: 'Gustavo Barbosa da Silva',
        avatar: '/images/avatars/perfil1.jpg',
      },
      tags: ['profissao'],
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
        'DESIGN PATTERNS EM JAVA | Dicas de Cursos Qualificados #02',
      slug: 'design-patterns-em-java',
      date: moment().subtract(10, 'seconds').toDate().getTime(),
      author: {
        id: 2,
        name: 'Jackson Gregorio',
        avatar: '/images/avatars/perfil2.jpg',
      },
      tags: ['design', 'java'],
      image: '/images/posts/postalura2.png',
      likes: 0,
      likesAfter: 1,
      comments: 0,
    },
    {
      id: 2,
      title:
        'COMO MELHORAR SEU CODIGO JAVASCRIPT (MELHORES CURSOS) | Dicas de Cursos Qualificados #01',
      slug: 'como-melhorar-seu-codigo-javascript',
      date: moment().subtract(1, 'day').toDate().getTime(),
      author: {
        id: 1,
        name: 'Gustavo Barbosa',
        name2: 'Gustavo Barbosa da Silva',
        avatar: '/images/avatars/perfil1.jpg',
      },
      tags: ['javascript', 'cursos', 'vscode'],
      image: '/images/posts/postalura.png',
      likes: 1,
      likesAfter: 2,
      comments: 1,
    },
    {
      id: 3,
      title: 'IFSP - CAMPUS CUBATÃO | Um ótimo ambiente para a formação de profissionais qualificados',
      slug: 'ifsp-campus-cubatao',
      date: moment().subtract(2, 'day').toDate().getTime(),
      author: {
        id: 1,
        name: 'Gustavo Barbosa',
        name2: 'Gustavo Barbosa da Silva',
        avatar: '/images/avatars/perfil1.jpg',
      },
      tags: ['ifsp', 'cubatao'],
      image: '/images/posts/postifsp.jpg',
      likes: 0,
      likesAfter: 1,
      comments: 1,
    },
    {
      id: 4,
      title: 'COMO ESCOLHER SUA PROFISSÃO | Nossa rede social é um ótimo ambiente para se conectar com profissionais de diversas áreas',
      slug: 'como-escolher-sua-profissao',
      date: moment().subtract(3, 'day').toDate().getTime(),
      author: {
        id: 1,
        name: 'Gustavo Barbosa',
        name2: 'Gustavo Barbosa da Silva',
        avatar: '/images/avatars/perfil1.jpg',
      },
      tags: ['profissao'],
      image: '/images/posts/postprofissao.jpg',
      likes: 0,
      likesAfter: 1,
      comments: 1,
    },
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
    name2: 'Gustavo Barbosa da Silva',
    avatar: '/images/avatars/perfil1.jpg',
  },
  markdownText: `
# Alura: Seria a melhor plataforma online para cursos de programação?

- #### O setor tecnológico está cada vez mais promissor, com oportunidades em diversas áreas de trabalho. Por isso, muitas pessoas vêm investindo em plataformas de ensino online que oferecem capacitação para atuar no segmento, mas é necessário escolher bem os cursos. Para te ajudar, neste post vamos mostrar uns dos sites mais populares e contar por que escolher a Alura.

### [Artigo Completo](https://escolhaideal.org/udemy-ou-alura/)

## Por que escolher a Alura ?

- #### Atualmente, a Alura conta com 1336 cursos completamente focados no mercado de trabalho, desenvolvidos por profissionais qualificados e aprimorados pela equipe do site. Com isso, embora ofereça aulas de vários temas diferentes, a plataforma garante que todos os conteúdos cumpram seu padrão de qualidade.

## Anexos: 

![Post](https://escolhaideal.org/wp-content/uploads/2021/12/Screenshot-2016-03-02-15.09.19.png)

- ### A Alura é uma das mais populares plataformas de ensino online na área da tecnologia, oferecendo cursos em diversas áreas do segmento. Desde seu lançamento, em 2013, o site contribuiu para a capacitação de mais de 500 mil profissionais, sem falar nas centenas de empresas que usaram a plataforma para alcançar eficiência tecnológica.
    `,
    markdownComment: `
- ### Sempre ouvi falar da Alura antes mesmo de decidir entrar na área de tecnologia e quando iniciei meus estudos na plataforma, me vi entusiasmado a aprender cada vez mais...

    `,
  tags: ['javascript', 'cursos', 'vscode'],
  perfilImg: '/images/avatars/perfil1.jpg',
  image: '/images/posts/postalura.png',
  likes: 2,
  comments: 1,
});

mock.onGet('/api/post/ifsp-campus-cubatao').reply(200, {
  id: 2,
  title:
    'IFSP - CAMPUS CUBATÃO | Um ótimo ambiente para a formação de profissionais qualificados',
  slug: 'ifsp-campus-cubatao',
  date: moment().subtract(2, 'days').toDate().getTime(),
  author: {
    id: 1,
    name: 'Gustavo Barbosa',
    name2: 'Gustavo Barbosa da Silva',
    avatar: '/images/avatars/perfil1.jpg',
  },
  markdownText: `
# IFSP - Campus Cubatão, um ponto de partida para profissionais qualificados

- #### O IF de Suzano tem se mostrado um ótimo representante na região de ensino publico superior de qualidade. O campus é bem equipado, bem preservado em sua estrutura, muito limpo e organizado.

- #### Os professores e professoras são na sua maioria Doutores que estão comprometidos com projetos e pesquisas que envolve o desenvolvimento científico dos estudantes do IF.

- #### A gestão é extremamente organizada e transparente em relação as obras e finanças do campus, no geral todos os funcionários são bem gentis e acolhedores.
    `,
    markdownComment: `
- ### Em relação ao ensino, você entra em uma imersão de conhecimento científico e ganha uma consciência sobre a responsabilidade do que você fará com ele após sua conclusão de curso, e é muito difícil achar um lugar onde se discute ciência com responsabilidade e desenvolvimento do país nos dias atuais.

    `,
  tags: ['ifsp', 'cubatao'],
  image: '/images/posts/postifsp.jpg',
  perfilImg: '/images/avatars/perfil1.jpg',
  likes: 1,
  comments: 1,
});

mock.onGet('/api/post/como-escolher-sua-profissao').reply(200, {
  id: 3,
  title:
    'COMO ESCOLHER SUA PROFISSÃO | Nossa rede social é um ótimo ambiente para se conectar com profissionais de diversas áreas',
  slug: 'como-escolher-sua-profissao',
  date: moment().subtract(3, 'days').toDate().getTime(),
  author: {
    id: 1,
    name: 'Gustavo Barbosa',
    name2: 'Gustavo Barbosa da Silva',
    avatar: '/images/avatars/perfil1.jpg',
  },
  markdownText: `
# Como escolher uma profissão: 9 dicas para tomar essa decisão !

- #### Velocidade do mercado de trabalho transforma crianças em profissionais precoces.

### [Artigo Completo](https://www.vagas.com.br/profissoes/por-que-escolher-uma-profissao-e-tao-dificil/)

- #### Escolher uma profissão para entrar no mercado de trabalho é sempre uma tarefa difícil, especialmente quando somos jovens e temos muitas dúvidas em relação a quase tudo. E é justamente nesse momento onde tudo é absolutamente incerto em que precisamos tomar essa decisão.

## Dicas para voce escolher uma profissão ideal: 
- ### Por que escolher uma profissão é sempre um desafio?
- ### O que levar em conta na hora de escolher sua profissão? 
- ### Como escolher a profissão ideal?
 - 1. Identifique seus interesses
 - 2. Conheça suas habilidades
 - 3. Faça um teste vocacional 
 - 4. Pesquise sobre as profissões do futuro 
 - 5. Liste opções de carreira
 - 6. Pesquise sobre as profissões selecionadas
 - 7. Entenda o mercado de trabalho com profissionais da área
 - 8. Pesquise cargos e salários 
 - 9. Liste os prós e contras das profissões
    `,
    markdownComment: `
- ### Decidir qual carreira seguir envolve pesquisas, autoconhecimento e análise do mercado de trabalho. Portanto, não tenha pressa em fazer a escolha. Reflita cuidadosamente sobre cada questão e anote as opções mais interessantes para você.

    `,
  tags: ['profissao'],
  image: '/images/posts/postprofissao.jpg',
  perfilImg: '/images/avatars/perfil1.jpg',
  likes: 1,
  comments: 1,
});

mock.onGet('/api/post/design-patterns-em-java').reply(200, {
  id: 4,
  title:
    'DESIGN PATTERNS EM JAVA | Dicas de Cursos Qualificados #02',
  slug: 'design-patterns-em-java',
  date: moment().subtract(2, 'minutes').toDate().getTime(),
  author: {
    id: 2,
    name: 'Jackson Gregorio',
    name2: '',
    avatar: '/images/avatars/perfil2.jpg',
  },
  markdownText: `
# Enfim, fazer os cursos da alura vale a pena ?

- #### Na nossa análise, o site de cursos Alura é bom e vale a pena mesmo, pois oferece conteúdos de qualidade e um bom suporte aos alunos. Atualmente, a plataforma apresenta mais de 1.300 cursos focados em diferentes áreas do segmento tecnológico, todos produzidos por profissionais qualificados.

- #### Além disso, os usuários contam com vários recursos tecnológicos e conteúdos extras que ajudam muito na jornada de aprendizado. Desde sua fundação, milhares de profissionais se capacitaram na plataforma que, por sua vez, proporciona um ambiente de estudos seguro, inovador e super prático. 

    `,
    markdownComment: `
## Não existe comentários disponíveis

    `,
  tags: ['design', 'java'],
  image: '/images/posts/postalura2.png',
  perfilImg: '/images/posts/infoicon.png',
  likes: 0,
  comments: 0,
});

mock.onGet('/api/posts/user/sonic27289').reply(200, {
  posts1: [
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
      likes: 2,
      likesAfter: 1,
      comments: 1,
    },
    {
      id: 2,
      title: 'IFSP - CAMPUS CUBATÃO | Um ótimo ambiente para a formação de profissionais qualificados',
      slug: 'ifsp-campus-cubatao',
      date: moment().subtract(2, 'days').toDate().getTime(),
      author: {
        id: 1,
        name: 'Gustavo Barbosa',
        avatar: '/images/avatars/perfil1.jpg',
      },
      tags: ['ifsp', 'cubatao'],
      image: '/images/posts/postifsp.jpg',
      likes: 1,
      likesAfter: 0,
      comments: 1,
    },
    {
      id: 3,
      title: 'COMO ESCOLHER SUA PROFISSÃO | Nossa rede social é um ótimo ambiente para se conectar com profissionais de diversas áreas',
      slug: 'como-escolher-sua-profissao',
      date: moment().subtract(3, 'days').toDate().getTime(),
      author: {
        id: 1,
        name: 'Gustavo Barbosa',
        avatar: '/images/avatars/perfil1.jpg',
      },
      tags: ['ifsp', 'cubatao'],
      image: '/images/posts/postprofissao.jpg',
      likes: 1,
      likesAfter: 0,
      comments: 1,
    }
  ],
});

mock.onGet('/api/posts/user/jacksonomagico').reply(200, {
  posts1: [
    {
      id: 4,
      title:
        'DESIGN PATTERNS EM JAVA | Dicas de Cursos Qualificados #02',
      slug: 'design-patterns-em-java',
      date: moment().subtract(10, 'seconds').toDate().getTime(),
      author: {
        id: 2,
        name: 'Jackson Gregorio',
        avatar: '/images/avatars/perfil2.jpg',
      },
      tags: ['design', 'java'],
      image: '/images/posts/postalura2.png',
      likes: 0,
      likesAfter: 1,
      comments: 0,
    },
  ],
});