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

import http from '../../utils/axios';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

function Groups() {
  const classes = useStyles();
  const params = useParams();
  const [following, setFollowing] = useState([]);
  const [user, setUser] = useState([]);
  const [flag, setFlag] = React.useState(true);
  const handleClick = () => {
    setFlag(!flag)
    toast('Ação realizada com Sucesso', {
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
          `/api/connections/groups/${params.username}`,
        );
        setFollowing(response.data.following);
      } catch (error) {}
    }
    fetchFollowing();
  }, [params]);

  return (
    <List dense className={classes.root}>
      <ListSubheader>Grupos ({flag ? `${user.groups}` : `${user.totalGroups}`})</ListSubheader>
      {following.map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem key={value} button>
            <ListItemAvatar>
              <Avatar alt={value.user.username} src={value.user.avatar} />
            </ListItemAvatar>
            <ListItemText id={labelId} primary={value.user.username} />
            <ListItemSecondaryAction>
              <Button onClick={handleClick}>{flag ? "Sair do Grupo" : "Solicitar entrada pro Grupo"}</Button>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}

export default Groups;