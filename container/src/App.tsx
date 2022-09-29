import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

import { AppProvider } from './contexts/AppContext'
import { Home, Navbar } from './components'

const Dashboard = React.lazy(() => import('app1/Dashboard'))
const Hub = React.lazy(() => import('app2/Hub'))

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Suspense fallback={null}>
          <Nav>
            <Navbar />
          </Nav>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/hub' element={<Hub />} />
            </Routes>
        </Suspense>
      </Router>
    </AppProvider>
  )
}

const Nav = styled('div')`
  position: static;
  top: 0;
  left: 0;
`

export default App