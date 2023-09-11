import React from 'react'
import NavHeader from './NavHeader'



export default function Header() {
  return (
    <header>

        
            <img src={require('../../img/logo2.jpg')} alt='logotype'/>
      <div className="titlesWrap">
      <h1>Main title</h1>
      <h4>Be free and persistent and you will find your way</h4>
      </div>
        <NavHeader />
        
    </header>
  )
}
