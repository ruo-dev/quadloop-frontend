import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BackTop } from 'antd';
import {  Home, NoPage,} from './Pages';
import { Navbar, Footer } from './Components';


const App = () => {
  return (
    <div className=" bg-white ">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/*" element={<NoPage/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>

    <BackTop />

    </div>
  ) 
}

export default App 