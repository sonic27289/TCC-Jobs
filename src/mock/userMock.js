import mock from '../utils/mock';

mock.onPost('api/home/login').reply(200, {
    'id': 1,
    'username': 'sonic27289',
    'email': 'sonic27289@gmail.com'
});