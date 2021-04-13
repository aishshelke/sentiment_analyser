import React from 'react'; //rafce
// import {Link,Route,BrowserRouter as Router} from 'react-router-dom';
import {Button,TextField,FormControlLabel,Checkbox, Link} from '@material-ui/core';
import {Card ,Grid , Typography } from '@material-ui/core';
import logo from '../../assets/rocket.png';
import useStyles from './styles';
import { Router } from 'react-router';



const Login = () => {

    const classes = useStyles();
    
    return (
        <div > 
            <div >
                <img src={logo} className={classes.image} />
            </div>
            <div>
            <Card className={classes.root}>
                <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Typography component="h1" variant="h6">
          To continue with Sentilyzer 
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container container justify="flex-end">
            <Grid item>
              <Router>
              <Link href="#" variant="body2"   >
                {"Don't have an account? Sign Up"}
              </Link>
              </Router>
            </Grid>
          </Grid>
        </form>
      </div>
            </Card>
            </div>
        </div>
    )};
    

export default Login;