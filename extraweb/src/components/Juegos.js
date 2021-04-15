import React,{useEffect} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ExposurePlus1Icon from '@material-ui/icons/ExposurePlus1';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { GetJuegos,UpdateGame } from '../actions/useractions';
import ButtonBase from '@material-ui/core/ButtonBase';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';


const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: '18px',
    marginLeft: '4%',
    display: 'inline-flex',
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    marginTop: '26px',
    boxShadow: '2px 2px 10px #666'
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(7),
      marginTop: theme.spacing(1),
      width: '20%',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#3f51b5',
  },
  inputRoot: {
    color: '#3f51b5',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Juegos = () => {
  const classes = useStyles();
  const [search, setSearch] = React.useState('')
  const [data, setData] = React.useState([])

  useEffect(() => {
    const fetchData = async () => {
      const resp = await GetJuegos('buscarJuego');
      console.log('respuesta', resp)
      setData(resp);      
    }
    fetchData();
  }, []); 

  const Actualizar =async(id, cal)=>{
    const resp = await UpdateGame({iduser:id, cali:cal},'updateGame');
    console.log('respuesta', resp)
  }

  return (
    <div>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          onChange={e=>{setSearch(e.target.value)}}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
      <div>

      </div>
      {data.filter((val => {
        if (search == "") {
          return val
        } else if (val.titulo.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
          return val
        }
      })).map((val, key) => {
        return (
          <div key={key} className={classes.root}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src={`${val.img}`} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        {val.titulo}
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        {val.descripcion}
                              </Typography>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={e=>Actualizar(val.id, val.calificacion)}
                        className={classes.button}
                        endIcon={<ExposurePlus1Icon />}
                      >
                        Favoritos
                          </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </div>
        )
      })}
    </div>

  )
}
export default Juegos
