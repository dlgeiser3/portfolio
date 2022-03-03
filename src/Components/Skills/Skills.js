import React, { useState, useEffect } from 'react';
import './Skills.scss';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import htmlIcon from '../../Assets/html.png';
import cssIcon from '../../Assets/css.png';
import jsIcon from '../../Assets/js.png';
import reactIcon from '../../Assets/react.png';
import gitIcon from '../../Assets/git.png';
import nodejsIcon from '../../Assets/node-js.png';
import postgresIcon from '../../Assets/postgres.png';
import postmanIcon from '../../Assets/postman.png';
import firebaseIcon from '../../Assets/firebase.png';
import herokuIcon from '../../Assets/heroku.png';
import bootstrapIcon from '../../Assets/bootstrap.png';
import muiIcon from '../../Assets/mui.png';






const Skills = () => {

  return (
    <>
      <Container className='skills'>
        {/* ROW 1 */}
        <Grid 
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        className="grid-top">
          <Grid className="icon-grid-top" item xs={1}></Grid>
          <Grid className="icon-grid-top" item xs={2}>
            <img className="icon" src={htmlIcon} alt="html-icon" />
          </Grid>
          <Grid className="icon-grid-top" item xs={2}>
            <img className="icon" src={cssIcon} alt="css-icon" />
          </Grid>
          <Grid className="icon-grid-top" item xs={2}>
            <img className="icon" src={jsIcon} alt="js-icon" />
          </Grid>
          <Grid className="icon-grid-top" item xs={2}>
            <img className="icon" src={reactIcon} alt="react-icon" />
          </Grid>
          <Grid className="icon-grid-top" item xs={2}>
            <img className="icon" src={gitIcon} alt="git-icon" />
          </Grid>
          <Grid className="icon-grid-top" item xs={1}></Grid>
        </Grid>
        {/* ROW 2 */}
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          className='grid-bottom'
          >
          <Grid className="icon-grid-bottom" item xs={1}>
            <img className="icon" src={nodejsIcon} alt="nodejs-icon" />
          </Grid>
          <Grid className="icon-grid-bottom" item xs={1}>
            <img className="icon" src={postgresIcon} alt="postgres-icon" />
          </Grid>
          <Grid className="icon-grid-bottom" item xs={1}>
            <img className="icon" src={postmanIcon} alt="postman-icon" />
          </Grid>
          <Grid className="icon-grid-bottom" item xs={1}>
            <img className="icon" src={firebaseIcon} alt="firebase-icon" />
          </Grid>
          <Grid className="icon-grid-bottom" item xs={1}>
            <img className="icon" src={herokuIcon} alt="heroku-icon" />
          </Grid>
          <Grid className="icon-grid-bottom" item xs={1}>
            <img className="icon" src={bootstrapIcon} alt="bootstrap-icon" />
          </Grid>
          <Grid className="icon-grid-bottom" item xs={1}>
            <img className="icon" src={muiIcon} alt="mui-icon" />
          </Grid>
        </Grid>

      </Container>
    </>
  )


}

export default Skills;