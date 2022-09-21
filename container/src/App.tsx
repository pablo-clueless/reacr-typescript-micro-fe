import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home, Navbar } from './components'

const Dashboard = React.lazy(() => import('app1/Dashboard'))
const Hub = React.lazy(() => import('app2/Hub'))


const App = () => {
  return (
    <Router>
      <Suspense fallback={null}>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/hub' element={<Hub />} />
          </Routes>
      </Suspense>
    </Router>
  )
}

export default App