import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Typography,
  Divider,
  Button,
} from '@material-ui/core';
//import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import ReactStars from 'react-stars';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import http from '../../utils/axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
  card: {
    marginBottom: theme.spacing(2),
  },
  details: {
    display: 'flex',
  },
  avatar: { 
    marginLeft: 'auto',
    height: 190,
    width: 200,
    flexShrink: 0,
    flexGrow: 0,
  },
  bio: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  progress: {
    marginTop: theme.spacing(2),
  },
  uploadButton: {
    marginRight: theme.spacing(2),
  },
  userInfo: {
    marginBottom: theme.spacing(2),
  },
  score: {
    paddingRight: 30,
    paddingTop: 20,
  },
  imagemformacao: {
    width: '60%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(3),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const AccountProfile = (props) => {
  const { ...rest } = props;
  const classes = useStyles();
  const params = useParams();
  const [user, setUser] = useState([]);
  const currentUser = useSelector((state) => state.account.user);
  const [flag, setFlag] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setFlag(!flag);
  };
  const notify = () => toast.success('A foto será removida em alguns instantes', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light"
});

const handleClickOpen = () => {
  setOpen(true);
};
const handleClose = () => {
  setOpen(false);
};

const ratingChanged = (newRating) => {
  toast('Usuário avaliado com Sucesso', {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark"
  })
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

  const isCurrentUser = currentUser?.username === user?.username;

  return (
    <div {...rest}>
      <Card className={classes.card}>
        <CardContent>
          <div className={classes.details}>
            <div>
              <Typography gutterBottom variant="h5">
                {`@${user.username}`}
              </Typography>
              <div className={classes.userInfo}>
                <Typography
                  className={classes.locationText}
                  color="textSecondary"
                  variant="caption"
                >
                  Posts publicados
                </Typography>
                <Typography
                  className={classes.dateText}
                  color="textSecondary"
                  variant="body1"
                >
                  {`${user.totalPost}`}
                </Typography>
              </div>
              <div className={classes.userInfo}>
                <Typography
                  className={classes.locationText}
                  color="textSecondary"
                  variant="caption"
                >
                  Seguidores
                </Typography>
                <Typography
                  className={classes.dateText}
                  color="textSecondary"
                  variant="body1"
                >
                  {flag ? `${user.totalFollowers}` : `${user.totalFollowingAfter}`}
                </Typography>
              </div>
              <div className={classes.userInfo}>
                <Typography
                  className={classes.locationText}
                  color="textSecondary"
                  variant="caption"
                >
                  Seguindo
                </Typography>
                <Typography
                  className={classes.dateText}
                  color="textSecondary"
                  variant="body1"
                >
                  {`${user.totalFollowing}`}
                </Typography>
              </div>
              <div className={classes.userInfo}>
                <Typography
                  className={classes.locationText}
                  color="textSecondary"
                  variant="caption"
                >
                  Avaliações recebidas
                </Typography>
                <Typography
                  className={classes.dateText}
                  color="textSecondary"
                  variant="body1"
                >
                  {`${user.avaliations}`}
                </Typography>
              </div>
            </div>
            <Avatar className={classes.avatar} src={user.avatar} />
          </div>
          {!isCurrentUser && (
            <>
              <Button variant="contained" color={flag ? "default" : "primary"} onClick={handleClick}>
                {flag ? "Seguindo" : "Seguir"}
              </Button><br></br>
              <div className={classes.score}>
              <ReactStars
              count={5}
              onChange={ratingChanged}
              size={35}
              color2={'#ffd700'} 
              />
              </div> 
            </>
          )}
        </CardContent>
        {isCurrentUser && (
          <>
            <Divider />
            <CardActions>
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
            />
            <label htmlFor="contained-button-file">
              <Button variant="text" color="primary" component="span" className={classes.uploadButton}>
                Alterar foto
              </Button>
            </label>
              <Button variant="text" onClick={notify}>Remover foto</Button>
            </CardActions>
          </>
        )}
      </Card>
      <Card>
        <CardContent>
          <div className={classes.userInfo}>
            <Typography
              className={classes.locationText}
              color="textSecondary"
              variant="caption"
            >
              Nome
            </Typography>
            <Typography
              className={classes.dateText}
              color="textSecondary"
              variant="body1"
            >
              {`${user.name}`}
            </Typography>
          </div>
          <div className={classes.bio}>
            <Typography
              className={classes.locationText}
              color="textSecondary"
              variant="caption"
            >
              Apresentação
            </Typography>
            <Typography variant="body1">
            {`${user.apresentation}`}
            </Typography>
          </div>
          <div className={classes.bio}>
            <Typography
              className={classes.locationText}
              color="textSecondary"
              variant="caption"
            >
              Formação
            </Typography>
            <Typography variant="body1">
              <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Formação Acadêmica
              </Button>
              <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                  <b class="title5">Formação Acadêmica</b>
                </DialogTitle>
                <DialogContent dividers>
                  <Typography gutterBottom>
                    <img src={`${user.apresentation}`} alt='formacao' className={classes.imagemformacao}></img>
                  </Typography>
                  <Typography gutterBottom>

                  </Typography>
                  <Typography gutterBottom>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                    lacus vel augue laoreet rutrum faucibus dolor auctor.
                  </Typography>
                  <Typography gutterBottom>
                    Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                    scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                    auctor fringilla.
                  </Typography>
                  <Typography gutterBottom>
                    Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                    scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                    auctor fringilla.
                  </Typography>
                  <Typography gutterBottom>
                    Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                    scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                    auctor fringilla.
                  </Typography>
                  </DialogContent>
                <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
            </Typography>
          </div>
          <div>
            <div className={classes.userInfo}>
              <Typography
                className={classes.locationText}
                color="textSecondary"
                variant="caption"
              >
                Data de registro
              </Typography>
              <Typography
                className={classes.dateText}
                color="textSecondary"
                variant="body1"
              >
                {`${user.joinedIn}`}
              </Typography>
            </div>
            <div className={classes.userInfo}>
              <Typography
                className={classes.locationText}
                color="textSecondary"
                variant="caption"
              >
                E-mail
              </Typography>
              <Typography
                className={classes.dateText}
                color="textSecondary"
                variant="body1"
              >
                {`${user.email}`}
              </Typography>
            </div>
            <div className={classes.userInfo}>
              <Typography
                className={classes.locationText}
                color="textSecondary"
                variant="caption"
              >
                Tags
              </Typography>
              <Typography
                className={classes.dateText}
                color="textSecondary"
                variant="body1"
              >
                {`${user.tags}`}
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountProfile;