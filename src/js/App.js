import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About';
import Contacts from '../pages/Contacts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export default function App() {
  return (
    <div >
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>  
            
            <Route path='about' element={<About/>}/>  
            <Route path='contacts' element={<Contacts/>}/>  
        </Routes>
        </BrowserRouter>
        
    
    </div >
  )
}

