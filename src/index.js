import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CssBaseline from '@material-ui/core/CssBaseline';
import registerServiceWorker from './registerServiceWorker';

import AppRouter from './routes/AppRoutes'

ReactDOM.render(

    <AppRouter>

        <CssBaseline />

        <App />


    </AppRouter>


    , document.getElementById('root'));
registerServiceWorker();
