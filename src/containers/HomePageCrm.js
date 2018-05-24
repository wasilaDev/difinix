import React from 'react';
import { Redirect, NavLink } from 'react-router-dom';

import CrmNavbar from '../components/difinix-crm-landing/navbar/CrmNavbar'
import CrmHero from '../components/difinix-crm-landing/hero/CrmHero'

class HomePageCrm extends React.Component {



    render() {


        return (

            <div>

                <CrmNavbar></CrmNavbar>

                <CrmHero></CrmHero>

            </div>

        );
    }
}



export default HomePageCrm;