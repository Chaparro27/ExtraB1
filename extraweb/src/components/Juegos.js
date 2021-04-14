import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import SearchBar from '@material-ui-search-bar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    top:10
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
}));

const Juegos =()=>{
    const classes = useStyles();
    const [search, setSearch]=React.useState('')
    const [data, setData] = React.useState([{"id":1,"first_name":"Mallissa"},
    {"id":2,"first_name":"Therine"},
    {"id":3,"first_name":"Steffie"},
    {"id":4,"first_name":"Shirline"},
    {"id":5,"first_name":"Albert"}])

console.log(data)
    return (
        <div>
            <div>
                <input type="text" placeholder="Buscar" onChange={e=>{setSearch(e.target.value)}}/>
            </div>
            {data.filter((val=>{
                if (search==""){
                    return val
                }else if(val.first_name.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
                    return val
                }
            })).map((val, key)=>{
                return(
                    <div key={key}  className={classes.root}>
                    <Paper className={classes.paper}>
                      <Grid container spacing={2}>
                        <Grid item>
                          <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
                          </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                          <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                              <Typography gutterBottom variant="subtitle1">
                                  {val.first_name}
                              </Typography>
                              <Typography variant="body2" gutterBottom>
                                Full resolution 1920x1080 • JPEG
                              </Typography>
                              <Typography variant="body2" color="textSecondary">
                                ID: 1030114
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                Remove
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid item>
                            <Typography variant="subtitle1">$19.00</Typography>
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