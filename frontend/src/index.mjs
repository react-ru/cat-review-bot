import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './components/App'
import 'bootstrap/dist/css/bootstrap.min.css';

const applicationHost = document.getElementById('application-host')

ReactDOM.render(<App />, applicationHost);
