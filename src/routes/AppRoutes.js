import React from "react";
import { BrowserRouter, Route, Switch, HashRouter} from "react-router-dom";
import HomePageDifinix from '../containers/HomePageDifinix';
import HomePageCrm from '../containers/HomePageCrm';
import SignUpPage from '../containers/SignUpPage';
import LogInPage from '../containers/LogInPage';

import ScrollToTop from "./ScrollToTop";

const AppRouter = () => (

    <BrowserRouter>

        <div>


            <Switch>



                <ScrollToTop>

                            <Route path="/" render={props => <HomePageDifinix {...props}></HomePageDifinix>} exact={true}></Route>
                            <Route path="/crm" render={props => <HomePageCrm {...props}></HomePageCrm>} exact={true}></Route>
                            <Route path="/login" render={props => <LogInPage {...props}></LogInPage>} exact={true}></Route>
                            <Route path="/signup" render={props => <SignUpPage {...props}></SignUpPage>} exact={true}></Route>

                </ScrollToTop>




            </Switch>

        </div>

    </BrowserRouter>


);


export default AppRouter;