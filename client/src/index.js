import React from 'react';
import ReactDOM from 'react-dom'; 
// Added ReactDOM import
import { BrowserRouter as Router } from "react-router-dom";

import './index.css';
import App from './App';


const rootElement = document.getElementById('root');

ReactDOM.render(
    <Router>
        <App />
    </Router>,
rootElement);