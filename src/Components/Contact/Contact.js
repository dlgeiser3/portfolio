import React, { useState, useEffect } from 'react';
import './Contact.scss';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import { useForm, ValidationError } from '@formspree/react';
import githubIcon from '../../Assets/github.png';
import linkedinIcon from '../../Assets/linkedin.png';
import resumeIcon from '../../Assets/resume.png';



const Contact = () => {
  const [state, handleSubmit] = useForm("mayvjbpv");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div className="contact">
      <Grid
        container
        className="contact-grid">
        <Grid item xs={8}>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="stretch">
            <form onSubmit={handleSubmit}>
              <Grid item xs={12}>
                {/* <label htmlFor="email">
                  Email Address
                </label> */}
              </Grid>
              <Grid item xs={12}>
                <input
                  id="email"
                  type="email"
                  name="email"
                  defaultValue={'Email Address'}
                  className="email-input"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </Grid>
              <Grid item xs={12}>
                <textarea
                  id="message"
                  name="message"
                  defaultValue={'Message'}
                  className="message-text"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </Grid>
              <Grid item xs={12}>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="submit-button">
                  SUBMIT
                </button>
              </Grid>
            </form>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            className="icon-container">
            <Grid className="icon-grid" item xs={4}>
              <img className="icon" src={githubIcon} alt="github-icon" />
            </Grid>
            <Grid className="icon-grid" item xs={4}>
              <img className="icon" src={linkedinIcon} alt="linkedin-icon" />
            </Grid>
            <Grid className="icon-grid" item xs={4}>
              <img className="icon-resume" src={resumeIcon} alt="resume-icon" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

    </div>
  );
}

export default Contact;