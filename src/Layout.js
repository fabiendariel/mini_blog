import React from 'react'
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = ({ search, setSearch }) => {
  return (
    <div className="App">
      <Header title="Blog" />
      <Nav serach={search} setSearch={setSearch} />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout