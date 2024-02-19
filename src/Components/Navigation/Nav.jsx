import React from 'react'
import logo from '../../../public/logo.png'
import '../../home.scss'
import {Link} from "react-router-dom";
import { ImSearch } from "react-icons/im"

const Navigation = () => {
  return (
    <nav className='header'>
        <img src={logo}></img>
        
        <input id='search' placeholder='Search....'></input>
        <div className="content">
            <Link to="/home">Home</Link>
            <Link to="/home">TV Shows</Link>
            <Link to="/home">Movies</Link>
            <Link to="/home">Web series</Link>



        </div>
    </nav>
  )
}

export default Navigation