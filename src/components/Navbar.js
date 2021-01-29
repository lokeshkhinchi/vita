import React from 'react'
import { NavLink } from 'react-router-dom';

const NavItem = ({text, link, icon}) => {
  return (
    <>
    <li>
      <a href={link} className="nav-link">
        <i className={icon}></i> {text}
      </a>
      </li>
    </>
  )
}

const Navbar = () => {
  return (
    <>
      <nav>
				<ul className="vertical-menu scrollspy">
          <NavItem text="Home" link="#home" exact icon="icon-home" />
          <NavItem text="About" link="#about" icon="icon-user" />
          <NavItem text="Services" link="#services" icon="icon-bulb" />
          <NavItem text="Resume" link="#experience" icon="icon-graduation" />
          <NavItem text="Works" link="#portfolio" icon="icon-grid" />
          <NavItem text="Blog" link="#blog" icon="icon-pencil" />
          <NavItem text="Contact" link="#contact" icon="icon-phone" />
				</ul>
			</nav>
    </>
  )
}

export default Navbar
