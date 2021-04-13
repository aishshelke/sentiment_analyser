import React from 'react'; //rafce
import { AppBar, Toolbar } from '@material-ui/core';
import logo from '../../assets/Sentilyzer.png';
import useStyles from './styles';


const Navbar = () => {

    const classes = useStyles();

    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <img src={logo} alt="" height="40px" className={classes.image}/>
                </Toolbar>
            </AppBar>
            
        </div>
    )
}

export default Navbar
