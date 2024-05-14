import React from 'react';
import ReactDOM from 'react-dom';

import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';

import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/footer.scss'
import './styles/menu.scss'
import './styles/header.scss'
import './styles/contact.scss'
import './styles/photo.scss'
import { BrowserRouter } from 'react-router-dom';


Amplify.configure(amplifyconfig);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
