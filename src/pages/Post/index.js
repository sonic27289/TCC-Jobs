import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import axios from '../../utils/axios';
import PostView from '../../components/PostView';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark
  }
}));

function Post() {
  const [post, setPost] = useState([]);
  const params = useParams();
  const classes = useStyles();

  const getPost = useCallback(async () => {
    const feed = await axios.get(`/api/post/${params.slug}`);
    setPost(feed.data);
  }, [setPost, params.slug]);

  useEffect(() => {
    getPost();
  }, [getPost]);

  return <PostView post={post} className={classes.root} />;
}

export default Post;