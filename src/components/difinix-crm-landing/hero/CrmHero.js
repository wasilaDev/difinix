import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';

import { Redirect, NavLink } from 'react-router-dom';

import MainLogo from '../../../Images/logo.png';
import { Button } from '@material-ui/core';

class CrmHero extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="mainCrmHero">


                <Grid container spacing={16} className="mainCrmHero__container">

                    <Grid item md={12} xs={12} className="crmHeroNav__container">

                        <div className="crmHeroNav">

                            <div className="crmHeroNav__logo">

                                <NavLink to="/" exact={true}>

                                    <img src={MainLogo} alt="Difinix Logo" />

                                </NavLink>

                            </div>

                            <div className="crmHeroNav__links">

                                <div>

                                    <span><NavLink to="/crm" exact={true}>HOW I USE IT</NavLink></span>

                                </div>


                                <div>

                                    <span><NavLink to="/crm" exact={true}>FEATURES</NavLink></span>

                                </div>

                                <div>

                                    <span><NavLink to="/crm" exact={true}>PRICING</NavLink></span>

                                </div>

                                <div>

                                    <span><NavLink to="/crm" exact={true}>INTEGRATION</NavLink></span>

                                </div>

                            </div>

                        </div>


                    </Grid>

                    <Grid item md={6} xs={12} className="crmHeroInfo__container">


                        <div className="crmHeroInfo">

                                <h1>END BENEFIT</h1>

                                <h2>Painkiller. Remove big disability. reward</h2>

                                <Button>GET STARTED FOR FREE</Button>

                        </div>
                        

                    </Grid>


                    <Grid item md={6} xs={12} className="crmHeroImg__container">


                        <div className="crmHeroImg">


                            <h2>ksdnvoksdovs</h2>

                        </div>


                    </Grid>
                </Grid>


            </div>
        );
    }
}

export default CrmHero;