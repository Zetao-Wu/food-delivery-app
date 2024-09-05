import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <hr />
      <div className='flex'>
        <Sidebar />
      </div>
    </div>
  )
}

export default App
