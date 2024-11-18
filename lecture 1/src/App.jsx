import React from 'react'
import Navbar from './components/navbar'
import Login from './components/login'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      {/* yaha par navbar ayega */}
      <Navbar />
      <Login />
      <Footer />
    </div>
  )
}

export default App