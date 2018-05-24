import React from 'react';
import { Redirect, NavLink } from 'react-router-dom';


class HomePageDifinix extends React.Component {



    render() {


        return (

            <div>

                <h1>HomePageDifinix</h1>
                <ul>
                    <li>

                        <NavLink to="/signup" exact={true}>

                            SIGNUP PAGE
                            
</NavLink>

                    </li>
                    <li>

                        <NavLink to="/login" exact={true}>

                            LOGIN PAGE
                            
</NavLink>



                    </li>
                    <li>

                        <NavLink to="/crm" exact={true}>

                            CRM HOME PAGE
                            
</NavLink>



                    </li>
                </ul>









            </div>

        );
    }
}



export default HomePageDifinix;