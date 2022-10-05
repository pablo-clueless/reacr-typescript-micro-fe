import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Hub from './components/Hub'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Hub />} />
      </Routes>
    </Router>
  )
}

export default App