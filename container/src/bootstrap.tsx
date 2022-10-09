import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import { AppProvider } from './contexts/AppContext'
import App from './App'
import './index.css'

ReactDOM.render(
    <AppProvider>
        <Router>
            <App />
        </Router>
    </AppProvider>,
    document.getElementById('root')
)