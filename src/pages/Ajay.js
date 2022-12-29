import React from 'react'
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

export default function Ajay() {
  
        const { collapseSidebar } = useProSidebar();
  return (
    <div style={{ display: 'flex', height: '100%' }}>
    <Sidebar>
      <Menu>
        <MenuItem routerLink={<Link to="google.com"></Link>} > Documentation</MenuItem>
        <MenuItem> Calendar</MenuItem>
        <MenuItem> E-commerce</MenuItem>
      </Menu>
    </Sidebar>
    <main>
      <button onClick={() => collapseSidebar()}>Collapse</button>
    </main>
  </div>
  )
}
