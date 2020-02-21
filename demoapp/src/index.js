import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';

import './index.css';
import App from '../src/container/App';
import * as serviceWorker from './serviceWorker';
import store from './store';



ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
,
 document.getElementById('root'));


serviceWorker.unregister();
