import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { Redirect, NavLink } from 'react-router-dom';

import MainLogo from '../../../Images/logo.png';

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

function CrmNavbar(props) {
    const { classes } = props;
    return (
        <div className="difinixNavbar">
            <AppBar color="default" position="static" className="mainDifinixNavbar">
                <Toolbar className="mainDifinixNavbar__toolbar">
                    <div className="mainDifinixNavbar__logo">

                        <NavLink to="/" exact={true}>

                            <img src={MainLogo} alt="Difinix Logo" />

                        </NavLink>

                    </div>

                    <div className="mainDifinixNavbar__links">


                        <div>

                            <span><NavLink to="/crm" exact={true}>APPS</NavLink></span>

                        </div>


                        <div>

                            <span><NavLink to="/crm" exact={true}>Features</NavLink></span>

                        </div>

                        <div>

                            <span><NavLink to="/crm" exact={true}>Pricing</NavLink></span>

                        </div>

                        <div>

                            <span><NavLink to="/crm" exact={true}>Blog</NavLink></span>

                        </div>


                    </div>


                    <div>

                        <span><NavLink to="/signup" exact={true}>SIGNUP</NavLink></span>

                    </div>


                </Toolbar>
            </AppBar>
        </div>
    );
}

CrmNavbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CrmNavbar);