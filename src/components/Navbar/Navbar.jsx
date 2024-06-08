import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'

const Navbar = () => {

  const [menu,setMenu] = useState("home")

  return (
    <div className='navbar' >
      <img src={logo} alt="" />
      <ul className='navbar-menu' >
        <a href="http://localhost:3000"  onClick={()=>setMenu("home")} className={menu==="home"?"active":""} >home</a>
        <a href="#projects"  onClick={()=>setMenu("projects")} className={menu==="projects"?"active":""} >projects</a>
        <a href="#footer"  onClick={()=>setMenu("social")} className={menu==="social"?"active":""} >social</a>
      </ul>
    </div>
  )
}

export default Navbar
