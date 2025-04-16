import React from 'react'
import {BrowserRouter as Router , Routes , Route, Links} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Guns from './pages/Guns'
const App = () => {
  return (
   <>
   <Router>
    <Navbar/>

    <Routes>

    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/guns" element={<Guns />} />

    </Routes>

   </Router>
   </>
  )
}

export default App
