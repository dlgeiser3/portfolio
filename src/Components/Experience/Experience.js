import React, { useState, useEffect } from 'react';
import './Experience.scss';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2), 
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#ffffff20'
  },
}));

const Experience = () => {
  const classes = useStyles();

  return (

    <>
      <div className='root' >
        <Grid className='experience' container spacing={3}>
          <Grid item xs={4}>
            <Paper className={classes.paper}>You're the greatest thing that has ever been or ever will be. You're special. You're so very special. Talent is a pursued interest. That is to say, anything you practice you can do. It's a super day, so why not make a beautiful sky? Everyone needs a friend. Friends are the most valuable things in the world. That's what makes life fun. That you can make these decisions. That you can create the world that you want. Let's do that again. Water's like me.</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>You're the greatest thing that has ever been or ever will be. You're special. You're so very special. Talent is a pursued interest. That is to say, anything you practice you can do. It's a super day, so why not make a beautiful sky? Everyone needs a friend. Friends are the most valuable things in the world. That's what makes life fun. That you can make these decisions. That you can create the world that you want. Let's do that again. Water's like me.</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>You're the greatest thing that has ever been or ever will be. You're special. You're so very special. Talent is a pursued interest. That is to say, anything you practice you can do. It's a super day, so why not make a beautiful sky? Everyone needs a friend. Friends are the most valuable things in the world. That's what makes life fun. That you can make these decisions. That you can create the world that you want. Let's do that again. Water's like me.</Paper>
          </Grid>
        </Grid>
      </div>
    </>
  )


}

export default Experience;