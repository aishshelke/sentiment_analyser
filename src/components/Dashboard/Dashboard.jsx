import React from "react"; //rafce
import { AppBar, Toolbar,bull, Grid } from "@material-ui/core";
import {Button,TextField,FormControlLabel,Checkbox, Link,Typography} from '@material-ui/core';
import logo from "../../assets/Sentilyzer.png";
import useControlled from '@material-ui/core/utils/useControlled'
import {Card,CardContent} from "@material-ui/core";
import name from "../../assets/Sentiment Analyzer.png";
import useStyles from "./styles";
import { IconButton, MenuItem, Menu } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";

const Dashboard = () => {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <img src={logo} alt="" height="40px" className={classes.image} />
          <div className={classes.grow} />
          <div className={classes.profile}>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              {/* <AccountCircle /> */}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}>
          <MenuItem onClick={handleClose}>Log Out</MenuItem>
            </Menu>
          </div>
         
        </Toolbar>
        
        </AppBar>
        
        
        <div className={classes.form}>
          <div className={classes.image1}>
          <img src={name} alt="sentiment"   />
          </div>
        </div> 
        
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="text"
            label="text"
            name="text"
            autoComplete="text"
            autoFocus
            className={classes.textField}
          />
 {/* submit button */}
          <Button
            type="submit"
             variant="contained"
            color="primary"
             className={classes.submit}
          > classify text
          </Button>

{/* result cards */}
        <Card className={classes.rcard}>
          <CardContent>
              <Typography className={classes.title}>
                RESULTS
              </Typography>
              <Typography variant=""> 
                TAG
              </Typography>
              <Typography  component="h1" classsName={classes.result}>
                positive
              </Typography>
          </CardContent>
        </Card>
        <Grid item> 
          <div className={classes.paper}> 
        <Card className={classes.emojicard}>
          <CardContent>
              <Typography className={classes.confidence}>
              confidence             
              </Typography>
          </CardContent>
          </Card>
        </div>
          </Grid>
         </div> 
         

  );
};

export default Dashboard;
