import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { Controller, useForm } from 'react-hook-form';
import imageDefault from '../assets/videojuegos.svg';
import Container from '@material-ui/core/Container';
import {
  Button,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputLabel,
  makeStyles,
  Paper,
  TextField,
  Typography
} from '@material-ui/core'

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Inicio = () => {


  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        //Aqui debe empezar el de la imagen,asi lo tenia efren XD
        <Grid item xs={2}>
          <Paper className={classes.paper} >
            <Controller
              name="image"

              render={(props) => (
                <>
                  {
                    (props.value !== "")
                      ? <img src={URL.createObjectURL(props.value)} alt="Hardskill" />
                      : <img src={imageDefault} alt="Videogame" />
                  }
                  <input
                    accept="image/*"
                    className={classes.input}
                    // onChange={ (e) => props.onChange(e.target.files[0]) }
                    id="icon-button-file"
                    type="file" />
                  <label htmlFor="icon-button-file" className={classes.superposition}>
                    <IconButton
                      id="buttonPhoto"
                      size="small" aria-label="upload picture" component="span">
                      <PhotoCamera fontSize="small" />
                    </IconButton>
                  </label>
                </>
              )}
            />
          </Paper>
        </Grid>
        //Aqui termina
        <Typography component="h1" variant="h5">
          Sign up
      </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
        </Button>

        </form>
      </div>

    </Container>

    //    <React.Fragment>
    //    <Typography  variant="h6" gutterBottom>
    //      Nuevo Juego
    //    </Typography>
    //    <Grid container spacing={3}>
    //      <Grid item xs={12} sm={6}>
    //        <TextField
    //          required
    //          id="titulo"
    //          name="titulo"
    //          label="Titulo"
    //          fullWidth
    //        />
    //      </Grid>
    //      <Grid item xs={12} sm={6}>
    //        <TextField
    //          required
    //          id="lastName"
    //          name="lastName"
    //          label="Last name"
    //          fullWidth
    //          autoComplete="family-name"
    //        />
    //      </Grid>
    //      <Grid item xs={12}>
    //        <TextField
    //          required
    //          id="address1"
    //          name="address1"
    //          label="Address line 1"
    //          fullWidth
    //          autoComplete="shipping address-line1"
    //        />
    //      </Grid>
    //      <Grid item xs={12}>
    //        <TextField
    //          id="address2"
    //          name="address2"
    //          label="Address line 2"
    //          fullWidth
    //          autoComplete="shipping address-line2"
    //        />
    //      </Grid>
    //      <Grid item xs={12} sm={6}>
    //        <TextField
    //          required
    //          id="city"
    //          name="city"
    //          label="City"
    //          fullWidth
    //          autoComplete="shipping address-level2"
    //        />
    //      </Grid>
    //      <Grid item xs={12} sm={6}>
    //        <TextField id="state" name="state" label="State/Province/Region" fullWidth />
    //      </Grid>
    //      <Grid item xs={12} sm={6}>
    //        <TextField
    //          required
    //          id="zip"
    //          name="zip"
    //          label="Zip / Postal code"
    //          fullWidth
    //          autoComplete="shipping postal-code"
    //        />
    //      </Grid>
    //      <Grid item xs={12} sm={6}>
    //        <TextField
    //          required
    //          id="country"
    //          name="country"
    //          label="Country"
    //          fullWidth
    //          autoComplete="shipping country"
    //        />
    //      </Grid>
    //    </Grid>
    //  </React.Fragment>
  );
}

export default Inicio;