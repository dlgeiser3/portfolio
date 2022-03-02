import React, { useState, useEffect } from 'react';
import './Header.scss'
import Container from '@material-ui/core/Container';
import times from 'lodash/times'


const stars = times(300, (index) => index)



const Header = () => {

  return (
    <>
    <Container className='header' id='header' maxWidth="xl">
      <div className='stars'>
        {stars.map((index) => <div className='star' key={index}></div>)}
      </div>
      {/* <img className='headshot' src={headshot}></img> */}
      <h1 className='name'>Danielle Geiser</h1>
      <h3 className='title'>Web Developer</h3>

      <div className='planets'>
        <div class="sun"></div>
        <div class="mercurys-orbit">
          <div class="mercury"></div>
        </div>
        <div class="venus-orbit">
          <div class="venus"></div>
        </div>
        <div class="earths-orbit">
          <div class="earth"></div>
        </div>
        <div class="mars-orbit">
          <div class="mars"></div>
        </div>
        <div class="jupiters-orbit">
          <div class="jupiter"></div>
        </div>
        <div class="saturns-orbit">
          <div class="saturn"></div>
        </div>
        <div class="uranus-orbit">
          <div class="uranus"></div>
        </div>
        <div class="neptunes-orbit">
          <div class="neptune"></div>
        </div>
        <div class="plutos-orbit">
          <div class="pluto"></div>
        </div>
      </div>
      </Container>
      </>
  )


}

export default Header;