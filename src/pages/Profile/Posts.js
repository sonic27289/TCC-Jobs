import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
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
        toast.info('Este usuário não possui posts ou conexões', {
          position: "top-center",
          autoClose: 7000,
          limit: 1,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
        toast.error('Ocorreu um erro, este usuário não existe', {
          position: "top-center",
          autoClose: 7000,
          limit: 1,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
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