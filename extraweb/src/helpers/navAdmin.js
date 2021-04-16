import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import { useCookies } from 'react-cookie';
import Juegos from '../components/Juegos'
import Inicio from '../components/Inicio'
import SignIn from '../components/Login'
// import Admin from '../components/Admin'
import Tops from '../components/Tops'
import Presentacion from '../components/Presentacion'
import Admin from '../components/Admin'
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


const NavAdmin=()=> {
  const classes = useStyles();
  const [cookies, removeCookie] = useCookies(['c_user']);
  const Logouthandler = () => {
    removeCookie('c_user');
}
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button onClick={Logouthandler} color="inherit">Salir</Button>
        </Toolbar>
      </AppBar>
      <div>
      <Admin/>
      </div>
    </div>
  );
}
export default NavAdmin