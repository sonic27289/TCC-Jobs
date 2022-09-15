import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

import PostCard from '../../../components/PostCard';

const useStyles = makeStyles((theme) => ({
    root: {
        
    }
}));

const posts = [
    { id: 1, description: 'teste 1'},
    { id: 2, description: 'teste 2'}
];

function Feed(){
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