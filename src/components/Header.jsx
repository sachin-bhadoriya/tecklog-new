import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-6 z-50 w-full">
      <div className="mx-auto flex bg-white items-center justify-between px-8 py-4 relative" >
        <Link><img src="/logo.png" alt="Tecklog - Logo" /></Link>
        <nav className={`${isMenuOpen ? 'active' : ''}`}>
          <ul className='main-nav-bar-list'>
            <li className='px-4 py-2 flex gap-2 items-center justify-between'><Link onClick={closeMenu} to="/">Home</Link></li>
            <li className='px-4 py-2 flex gap-2 items-center justify-between'><Link onClick={closeMenu} to="/about">About</Link></li>
            <li className='px-4 py-2 flex gap-2 items-center justify-between'><Link onClick={closeMenu} to="/contact">Contact</Link></li>
            <li className='px-4 py-2 flex gap-2 items-center justify-between'><Link onClick={closeMenu} to="/services">Services</Link><i className="fa-solid fa-chevron-down font14"></i></li>
            <li className='px-4 py-2 flex gap-2 items-center justify-between'><Link onClick={closeMenu} to="/blog">Blog</Link></li>
            <li className='px-4 py-2 flex gap-2 items-center justify-between'><Link onClick={closeMenu} to="/portfolio">Portfolio</Link></li>
          </ul>
        </nav>
        <div className="nav-cta-btn rounded-full bg-slate-950 px-5 py-2.5 text-sm cursor-pointer font-semibold text-white transition-all hover:shadow-lg"><Link to="/contact">Get In Touch</Link></div>
        <button className="mobile-menu-icon p-1 rounded-xl bg-slate-950 text-white cursor-pointer transition-all hover:shadow-lg w-10 h-10 flex items-center justify-center" onClick={toggleMenu}>
          {!isMenuOpen ? <i className="fa-solid fa-bars-staggered"></i> : <i class="fa-solid fa-xmark"></i>}
        </button>
       </div>
    </header>
  )
}

export default Header