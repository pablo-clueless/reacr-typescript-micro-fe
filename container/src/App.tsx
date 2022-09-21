import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Container, Navbar } from './components'

const Home = React.lazy(() => import('app1/Home'))
const Hub = React.lazy(() => import('app2/Hub'))


const App = () => {
  return (
    <Router>
      <Suspense fallback={null}>
        <Navbar />
          <Routes>
            <Route path='/' element={<Container />} />
            <Route path='/dashboard' element={<Home />} />
            <Route path='/hub' element={<Hub />} />
          </Routes>
      </Suspense>
    </Router>
  )
}

export default App