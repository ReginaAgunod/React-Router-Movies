import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
// Added ReactDOM import
import {BrowserRouter as Router} from "react-router-dom";

import App from './App';

const rootElement = document.getElementById('root');

ReactDOM.render(
    // Nesting App in Router to access router data (Turned on Router)
    <Router>
        <App />
    </Router>,
rootElement);