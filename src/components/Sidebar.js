import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';
import {Link} from 'react-scroll'

export default props => {
  return (
    <Menu>
      <Link activeClass="active" to="header-wrapper" spy={true} smooth={true} className="menu-item">Top</Link>
      <Link activeClass="active" to="projects" spy={true} smooth={true}>Projects</Link>
      <Link activeClass="active" to="five" spy={true} smooth={true}>Contact</Link>
    </Menu>
  );
};