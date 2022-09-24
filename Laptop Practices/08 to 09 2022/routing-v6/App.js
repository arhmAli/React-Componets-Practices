import React from 'react';
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import './components/about.scss'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              <Link exact to='/'>home</Link>
            </li>
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path='/' element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path='/about/:id' element={<Profile />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
