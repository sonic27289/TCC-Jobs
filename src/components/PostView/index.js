import React from 'react';
import moment from 'moment';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import ReactMarkdown from 'react-markdown';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Header from '../../pages/Home/components/Header';
import BottomBar from '../../pages/Post/New/BottomBar';

const useStyles = makeStyles((theme) => ({
  imagePreview: {
    width: '100%',
  },
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingBottom: '100px'
  },
  avatar: {
    marginRight: theme.spacing(1),
  },
  markdown: {
    color: theme.palette.text.primary,
  },
  title: {
    minHeight: 0,
    height: '100%',
    paddingTop: 80,
    variant: 'h2',
    color: theme.palette.text.primary
  },
  container: {
    maxWidth: 'lg'
  },
  box1: {
    marginBottom: 8
  },
  box2: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 8
  },
  box3: {
    marginBottom: 24
  },
  darkmode: {
    color: theme.palette.text.secondary
  }
}));

function PostView({ post }) {
  const classes = useStyles();
  const { image, title, date, author, tags, markdownText } = post;

  return (
    <div className={classes.root}>
      <Header></Header>
        <Container maxWidth="lg" className={classes.container}>
        <Box mb={2} className={classes.box1}>
          <Typography variant="h2" color='textPrimary' className={classes.title}>
            {title}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" mb={2} className={classes.box2}> 
          <Box>
            <Avatar className={classes.avatar} src={author?.avatar} />
          </Box>
          <Box>
            <Typography variant="body1" color="textPrimary" className={classes.markdown}>
              {author?.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" className={classes.darkmode}>
              {moment(date).fromNow()}
            </Typography>
          </Box>
        </Box>
        <Box mb={2} className={classes.box1}>
          <Typography variant="body1" color="textPrimary" className={classes.markdown}>
            {tags?.map((item) => item).join(', ')}
          </Typography>
        </Box>
        {image && (
          <Box mb={2} className={classes.box1}>
            <img className={classes.imagePreview} src={image} alt="background" />
          </Box>
        )}
        <Box>
          <IconButton aria-label="like">
            <FavoriteIcon />
            <Typography
              style={{ cursor: 'pointer' }}
              color="textSecondary"
              variant="body2"
              className={classes.darkmode}
            >
              {post.likes}
            </Typography>
          </IconButton>
        </Box>
        <Divider />
        <Box mb={8} className={classes.box3}>
          <div>
              <ReactMarkdown children={markdownText} className={classes.markdown}/>
          </div>
        </Box>
      </Container>
      <BottomBar></BottomBar>
    </div>
  );
}

export default PostView;