import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';

import Juegos from '../components/Juegos'
import Inicio from '../components/Inicio'
import SignIn from '../components/Login'
// import Admin from '../components/Admin'
import Tops from '../components/Tops'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  }
}));


const NavBar=()=> {
  const classes = useStyles();
  const [tap, setTap] = useState(0);

  const ViewPanel = () => {
      switch (tap) {
          case 1:
              return <Inicio/>;
          case 2:
              return <Juegos/>;
          case 3:
              return <Tops/>;
          default:
              return <Inicio/>;
      }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Avatar alt="Remy Sharp" src="https://image.freepik.com/vector-gratis/plantilla-logo-videojuego-mando-juego_23-2147824453.jpg" className={classes.large} />
          <Typography variant="h6">
            GameCenter
          </Typography>
          <Typography  variant="h3" className={classes.title}>
          <IconButton onClick={ () => setTap(1) }  color="inherit" >
            INICIO
          </IconButton>
          <IconButton onClick={ () => setTap(2) }  color="inherit" >
            JUEGOS
          </IconButton>
          <IconButton onClick={ () => setTap(3) } color="inherit">
            TOP'S
          </IconButton>
          </Typography>
          <Button onClick={ () => setTap(3) } color="inherit">Salir</Button>
        </Toolbar>
      </AppBar>
      <div>
      {ViewPanel()}
      </div>
    </div>
  );
}
export default NavBar