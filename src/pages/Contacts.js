import React from 'react'
import Header from "../js/components/Header";
import Footer from "../js/components/Footer";
import Sidebar from "../js/components/Sidebar";
import MainContacts from "../js/components/MainContacts";

export default function Contacts() {
  return (
    <div className='container'>
    <Header/>
    <MainContacts/>
    <Sidebar/>
    <Footer/>
    </div >
  )
}
