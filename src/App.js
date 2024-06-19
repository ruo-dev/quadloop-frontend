import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BackTop } from 'antd';
import {  Home, NoPage,} from './Pages';
import { Navbar, Footer } from './Components';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Recover from './Pages/Recover';


const App = () => {
  return (
    <div className=" bg-white ">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/recover' element={<Recover/>} />
        <Route path="/*" element={<NoPage/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>

    <BackTop />

    </div>
  ) 
}

export default App 