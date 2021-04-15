import React, {useState, useEffect} from 'react';
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
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import { CreateGame } from '../actions/useractions';
import { Formik } from 'formik';
import CardActionArea from '@material-ui/core/CardActionArea';

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
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  }
}));

export default function Inicio() {
  const classes = useStyles();
  const [image, setImage]=useState('https://www.somosxbox.com/wp-content/uploads/2020/07/Halo_Infinite_Keyart_Primary_Vertical-1-e1595541108384-790x432.jpg')
  const Changed =(e)=> {
            if(e===null)
            {
                console.log('err')
            }else{
           let input = e.target;
            let reader = new FileReader();
            reader.readAsDataURL(input.files[0]);
            reader.onload = function(){
                let dataURL = reader.result;
                setImage(dataURL)
                
            }}
        
    }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <Grid item xs={12}>
             <Card className={classes.root}>
            <Avatar alt="Remy Sharp" src={`${image}`} className={classes.large} />
             </Card>
     </Grid>
      <Button className={classes.avatar}
        variant="contained"
        component="label"
      >
        Subir imagen del juego
        <input
          type="file"
          hidden
          onChange={(e)=>{Changed(e)}}
        />
      </Button>
      <div>
      <Formik
                    initialValues={{ titulo: '', descripcion: '', status:false, img: '', calificacion:1 }}
                    onSubmit={(data, { setSubmitting,resetForm }) => {
                        setSubmitting(true);
                        const datos={ 
                          titulo: data.titulo, descripcion: data.descripcion, status:false, img: image, calificacion:1 
                        }
                        
                        CreateGame(datos, 'registerNew');
                        console.log("submit", datos)
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
            id="titulo"
            label="Titulo del juego"
            name="titulo"
            value={values.titulo}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="descripcion"
            label="Descripción breve"
            multiline
            rows={4}
            id="descripcion"
            value={values.descripcion}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={isSubmitting}
          >
            Añadir nuevo juego
          </Button>
        </form>
                            )}
                            </Formik>
        </div>

      </div>
      
    </Container>
  );
}