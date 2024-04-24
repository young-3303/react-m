// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Layout from './view/layout'
import './App.css'
import React from "react";
import hala from 'postcss-px-to-viewport'
const App: React.FC = () =>{
  console.log(hala);
  return (
    <>
      <Layout></Layout>
    </>
  )
}

export default App
