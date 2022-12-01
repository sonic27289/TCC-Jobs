import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import http from '../../utils/axios';
import PostCard from '../../components/PostCard';

function Posts() {
  const [posts1, setPosts] = useState([]);
  const params = useParams();

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await http.get(`/api/posts/user/${params.username}`);
        setPosts(response.data.posts1);
      } catch(error) {
        console.log(error)
      }
    }
    fetchPosts();
  }, [params]);

  return (
    <div>
      {posts1.map((post1) => (
        <PostCard key={post1.id} post={post1} />
      ))}
    </div>
  );
}

export default Posts;