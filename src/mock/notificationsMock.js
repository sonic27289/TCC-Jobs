import moment from 'moment';
import mock from '../utils/mock';

mock.onGet('/api/notifications').reply(200, {
    notifications: [
        {
            id: '1p',
            title: 'Novas avaliações recebidas',
            description: 'Você recebeu 2 novas avaliações ',
            type: 'reviews',
            createdAt: moment()
                .subtract(2, 'hours')
                .toDate()
                .getTime()
        },
        {
            id: '2p',
            title: 'Comentários recebidos',
            description: 'Você não recebeu nenhum novo comentario ',
            type: 'new_comment',
            createdAt: moment()
                .subtract(1, 'day')
                .toDate()
                .getTime()
        },
        {
            id: '3p',
            title: 'Curtidas recebidas' ,
            description: 'Você recebeu 1 novo like ',
            type: 'like',
            createdAt: moment()
                .subtract(2, 'days')
                .toDate()
                .getTime()
        },
        {
            id: '4p',
            title: 'Novos seguidores',
            description: '1 novo profissional começou a seguir você ',
            type: 'connection',
            createdAt: moment()
                .subtract(3, 'days')
                .toDate()
                .getTime()
        },
    ]
})

mock.onGet('/api/feed/notifications').reply(200, {
    notifications: [
        {
            id: '1p',
            title: 'Novas avaliações recebidas',
            description: 'Você recebeu 1 nova avaliação ',
            type: 'reviews',
            createdAt: moment()
                .subtract(2, 'hours')
                .toDate()
                .getTime()
        },
        {
            id: '2p',
            title: 'Novos comentários recebidos',
            description: 'Você recebeu 3 novos comentarios ',
            type: 'new_comment',
            createdAt: moment()
                .subtract(1, 'day')
                .toDate()
                .getTime()
        },
        {
            id: '3p',
            title: 'Novos "likes" recebidos ',
            description: 'Você recebeu 1 novo like ',
            type: 'like',
            createdAt: moment()
                .subtract(2, 'days')
                .toDate()
                .getTime()
        },
        {
            id: '4p',
            title: 'Novos seguidores',
            description: '2 desenvolvedores começaram a seguir você ',
            type: 'connection',
            createdAt: moment()
                .subtract(3, 'days')
                .toDate()
                .getTime()
        },
    ]
})