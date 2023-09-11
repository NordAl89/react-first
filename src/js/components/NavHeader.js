import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavHeader() {
  const [spanCros, setSpanCros] = useState("");
  const [openBurgerMenu, setOpenBurgerMenu] = useState("");
  function handleOnclick() {
    setSpanCros((prev) => {
      if (prev === "") {
        return (prev = "burgerMenueClose");
      } else {
        return (prev = "");
      }
    });

    setOpenBurgerMenu (prev => {
      if(prev === ''){
        return prev = 'openBurgerMenu'
      }else {
        return prev = '';
      }
    })
  }

  return (
    <nav className="navHeader">
      <button onClick={handleOnclick} className={`burgerMenue ${spanCros}`}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={openBurgerMenu}>
        <li>
          <Link  onClick={handleOnclick} to="/">Home</Link>
        </li>
        <li >
          <Link onClick={handleOnclick} to="/about">About us</Link>
        </li>
        <li >
          <Link onClick={handleOnclick} to="/contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
  );
}
