import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

import PostCard from '../../../components/PostCard';

const useStyles = makeStyles((theme) => ({
    root: {
        
    }
}));

const posts = [
    // { id: 1, description: 'teste 1'},
    // { id: 2, description: 'teste 2'},
    {
        id: 1,
        author: {
            id: 1,
            name: 'Gustavo Barbosa',
            username: 'sonic27289',
            avatar: '/images/avatars/iconeperfil.jpg'

        },
        title: "Comparativo entre jQuery e React.js - Performance",
        date: "Setembro 15, 2022",
        description: "Teste para o Trabalho de Conclusão de Curso, JOBS",
        hashtags: "#frameworks, #javascript, #jquery, #reactjs",
        image: "/images/posts/imagempost1.jpg"
    },
    {
        id: 2,
        author: {
            id: 1,
            name: 'Gustavo Barbosa',
            username: 'sonic27289',
            avatar: '/images/avatars/iconeperfil.jpg'

        },
        title: "Comparativo entre jQuery e React.js - Performance",
        date: "Setembro 15, 2022",
        description: "Teste para o Trabalho de Conclusão de Curso, JOBS",
        hashtags: "#frameworks, #javascript, #jquery, #reactjs",
        image: "/images/posts/imagempost1.jpg"
    }
];

function Feed(){
    const classes = useStyles();

    return (
        <div>
            {
                posts.map(post => (
                    <PostCard key={post.id} post={post}></PostCard>
                ))
            }
        </div>
    )
}

export default Feed;