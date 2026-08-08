import React from 'react'
import Header from './components/Header'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home' 
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import NotFound from './components/NotFound'

const App = () => {
  return (
    <>
      <Header />
      <Link className="whatsapp-fixed-btn fixed bottom-10 right-10 bg-green-400 rounded-full shadow-lg z-50 w-14 h-14 iconAnimate flex items-center justify-center"><i className="fa-brands fa-whatsapp font30 text-green-800"></i></Link>
      <Link className='fixed bottom-50 -right-13 fixed-cta-btn px-4 pt-3 pb-6 text-white z-50'>Call To Action</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App