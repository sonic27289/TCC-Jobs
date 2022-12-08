import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router";

import http from '../../utils/axios';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

function Connection() {
  const classes = useStyles();
  const params = useParams();
  const [following, setFollowing] = useState([]);
  const [user, setUser] = useState([]);
  const [flag, setFlag] = React.useState(true);
  const navigate = useNavigate();
  const handleClick = () => {
    setFlag(!flag)
    toast('Ação realizada com sucesso', {
      position: "top-right",
      autoClose: 7000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    })
  };

  const handleProfile = () => {
    navigate(`/jacksonomagico`);
}

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await http.get(`/api/home/user/${params.username}`);
        setUser(response.data);
      } catch (error) {}
    }
    fetchUser();
  }, [params]);

  useEffect(() => {
    async function fetchFollowing() {
      try {
        const response = await http.get(
          `/api/connections/following/${params.username}`,
        );
        setFollowing(response.data.following);
      } catch (error) {}
    }
    fetchFollowing();
  }, [params]);

  return (
    <List dense className={classes.root}>
      <ListSubheader>Seguindo ({flag ? `${user.following}` : `${user.totalFollowingAfter}`})</ListSubheader>
      {following.map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem key={value} button>
            <ListItemAvatar>
              <Avatar alt={value.user.username} src={value.user.avatar} />
            </ListItemAvatar>
            <ListItemText id={labelId} primary={value.user.username} onClick={handleProfile} />
            <ListItemSecondaryAction>
              <Button onClick={handleClick}>{flag ? "Deixar de seguir" : "Seguir"}</Button>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}

export default Connection;