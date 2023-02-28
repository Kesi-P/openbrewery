import React from 'react';
//import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles/makeStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

export default function DenseAppBar() {
  return (
    <div className='navroot'>
      <AppBar position="static" className='navbg'>
        <Toolbar >
          
          <Typography variant="h6" style={{display: "contents"}}>
            <img src='https://www.openbrewerydb.org/favicon.png' className='nav img' /> List Breweries
          </Typography>
          <Button variant="outlined" style={{marginLeft: "auto"}} href= '/login'>
            Outlined</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}