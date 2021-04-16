import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { fade, FormControl,
  OutlinedInput, IconButton, InputAdornment, InputLabel, Divider, FormHelperText
} from '@material-ui/core';
import { startGoogleLogin } from '../actions/auth';
import { useCookies } from 'react-cookie';
import { Formik } from 'formik';
import { Login } from '../actions/useractions';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const [, setCookie] = useCookies(['c_user'])
  const classes = useStyles();
  const handleGoogleLogin = () => {
   startGoogleLogin(setCookie) ;
}
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Iniciar Sesión
        </Typography>
        <Formik
                    initialValues={{ correo: '', pass: ''}}
                    onSubmit={(data, { setSubmitting,resetForm }) => {
                        setSubmitting(true);
                        
                        console.log("submit", data)
                        Login(data, setCookie);
                        //make async call
                        setSubmitting(false);
                        resetForm({})
                    }}
                >
                    {({ values, isSubmitting, handleChange, handleBlur, handleSubmit, resetForm}) => (
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="correo"
            label="Correo Electronico"
            name="correo"
            autoComplete="email"
            autoFocus
            value={values.correo}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="pass"
            label="Contraseña"
            type="password"
            id="pass"
            value={values.pass}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={isSubmitting}
            
          >
            Iniciar
          </Button>
          <div>
                        <IconButton onClick={ handleGoogleLogin } >
                            <Avatar alt="" src='https://pbs.twimg.com/profile_images/988272404915875840/lE7ZkrO-_400x400.jpg' className={ classes.buttonGoogle }/>
                        </IconButton>
                    </div>
        </form>
                                    )}
                                    </Formik>
      </div>
      
    </Container>
  );
}