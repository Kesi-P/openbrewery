import React from 'react';
//import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles/makeStyles';

import { useSession } from 'next-auth/react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { signOut } from "next-auth/react"

export default function DenseAppBar() {
  const { data: session, status } = useSession({});
 console.log('ses',session)
return (
    <div className='navroot'>
      <AppBar position="static" className='navbg'>
        <Toolbar >
          
          <Typography variant="h6" style={{display: "contents"}}>
            <img src='https://www.openbrewerydb.org/favicon.png' className='nav img' /> List Breweries
          </Typography>
          
          
        {/* { session?.user ? <><Typography vvariant="h6" style={{ display: "block", marginLeft: "auto"}}>
              Welcome, {session.user.name}
          </Typography><Button variant="outlined" style={{marginLeft: "2em"}} onClick={() => signOut()}>Sign out</Button></>
          :
          <Button variant="outlined" style={{marginLeft: "auto"}} href= '/login'>
          Login</Button>
          */} 
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

