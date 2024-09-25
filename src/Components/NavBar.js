import React from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg NB-container sticky-top">
        <div className="container-fluid">


          {/* Menu Button  */}
          <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className='d-flex NB-icon'><i className="fa-solid fa-bars "></i><h3 className='NB-menu'>MENU</h3></span>
          </button>

          {/* menu Content */}
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto">

              {/* Home  */}
              <li className="nav-item">
                <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link NB-list active' : 'nav-link NB-list ')} >HOME</NavLink>
              </li>

              {/* About Us  */}
              <li className="nav-item" >
                <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link NB-list active' : 'nav-link NB-list ')}  >ABOUT US</NavLink>
              </li>


              {/* Products  */}
              <li className="nav-item" >
                <NavLink to="/product" className={({ isActive }) => (isActive ? 'nav-link NB-list active' : 'nav-link NB-list ')}>PRODUCTS</NavLink>
              </li>

              {/* Service  */}
              <li className="nav-item" >
                <NavLink to="/service" className={({ isActive }) => (isActive ? 'nav-link NB-list active' : 'nav-link NB-list ')}>SERVICES</NavLink>
              </li>

              {/* Contact Us  */}
              <li className="nav-item" >
                <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-link NB-list active' : 'nav-link NB-list ')}>CONTACT US</NavLink>
              </li>
            </ul>


          </div>

          {/* Get a quote  */}
          <div className='ms-auto '>
            <NavLink className='NB-quote' to="/contact">GET A QUOTES</NavLink>
          </div>

        </div>

      </nav>
    </>
  )
}

export default NavBar
