import React from 'react'
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import useWindowSize from './hooks/useWindowsSize';

const Layout = ({ search, setSearch }) => {

  const { width } = useWindowSize();

  return (
    <div className="App">
      <Header title="Blog" width={width} />
      <Nav serach={search} setSearch={setSearch} />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout