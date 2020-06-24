import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { useStyles } from './styles';

export default function Page (props) {

  const classes = useStyles();

  return (
    <div className={classes.rootLogin}>
      <div className={classes.contentLogin}>
        <div className={classes.cardLogin}>
          <div className={classes.inputsLogin}>
            <TextField 
              label='Email'
            />
            <TextField 
              label='Password'
            />
          </div>
          <div className={classes.buttonLogin}>
            <Button>
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}