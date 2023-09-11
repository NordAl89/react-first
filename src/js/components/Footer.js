import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <footer>
       <nav>
          <ul>
            <li>
            <Link to="/">Home</Link>
             
            </li>
            <li>
            <Link to="/about">About us</Link>
            
            </li>
            <li>
            <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </nav>
        <div className="footerContacts">
          <a href='tel:+79284564560'>Phone: +7 928 456 45-60</a>
          <a href='mailto: abc@example.com'>Email: abc@example.com</a>
        </div>
    </footer>
  )
}
