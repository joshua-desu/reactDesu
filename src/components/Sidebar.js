import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/Header">
        Top
      </a>
      <a className="menu-item" href="/About">
        About
      </a>
      <a className="menu-item" href="/projects">
        Projects
      </a>
      <a className="menu-item" href="/testimonials">
        Testimonials
      </a>
      <a className="menu-item" href="/contact">
        Contact
      </a>
    </Menu>
  );
};