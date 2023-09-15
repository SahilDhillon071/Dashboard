import React from 'react';
import { Link } from 'react-router-dom';
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
} from 'react-icons/bs';
import styled from 'styled-components';

const ServiceLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsCart3 className='icon_header' />PET SHOP
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>
      <ServiceLink to='/home'>
        <ul className='sidebar-list'>
          <li className='sidebar-list-item'>
            <BsGrid1X2Fill className='icon' /> Dashboard
          </li>
        </ul>
      </ServiceLink>
      <ServiceLink to='/store'>
        <ul className='sidebar-list'>
          <li className='sidebar-list-item'>
            <BsFillArchiveFill className='icon' /> Store
          </li>
        </ul>
      </ServiceLink>
      <ServiceLink to='/services'>
        <ul className='sidebar-list'>
          <li className='sidebar-list-item'>
            <BsFillGrid3X3GapFill className='icon' /> Services
          </li>
        </ul>
      </ServiceLink>
    </aside>
  );
}

export default Sidebar;
