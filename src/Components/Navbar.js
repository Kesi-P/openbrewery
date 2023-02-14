import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  bg: {
    backgroundColor: 'rgb(255,188,0)'
  },
  img: {
    margin: '20px'
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bg}>
        <Toolbar >
          
          <Typography variant="h6" style={{display: "contents"}}>
            <img src='https://www.openbrewerydb.org/favicon.ico' className={classes.img} /> List Breweries
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}