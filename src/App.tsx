// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Layout from './view/layout'
import './App.css'
import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

const App: React.FC = () =>{
  return (
    <BrowserRouter>
        <Layout />
      {/*<nav style={{ display: 'flex', gap: 12, padding: 12 }}>*/}
      {/*  <Link to="/">首页</Link>*/}
      {/*  <Link to="/about">关于</Link>*/}
      {/*</nav>*/}
      {/*<Routes>*/}
      {/*  <Route path="/" element={<Home />} />*/}
      {/*  <Route path="/about" element={<About />} />*/}
      {/*  <Route path="*" element={<NotFound />} />*/}
      {/*</Routes>*/}
    </BrowserRouter>
  )
}

export default App
