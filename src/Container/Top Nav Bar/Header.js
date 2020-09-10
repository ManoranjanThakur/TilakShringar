import React from 'react';
import './Header.css';
import DropDown from './DropDown';
import { BsPersonPlus } from "react-icons/bs";
import { Link } from 'react-router-dom';


var quant=2;

function Header() {
    return (
            <div className="navbar">
                <Link to='/' style={{color:'#4D4D4D'}}><ul className="left"></ul></Link>
                <ul className="mid">
                     <li><Link to='/shop' style={{color:'#4D4D4D'}}>Shop</Link></li>
                     <li><Link to='/about' style={{color:'#4D4D4D'}}>About</Link></li>
                     <li><Link to="/categories" style={{color:'#4D4D4D'}}>Categories</Link></li>
                     <li><Link to='/query' style={{color:'#4D4D4D'}}>Query</Link></li>
                     <li><Link to='/blogs' style={{color:'#4D4D4D'}}>Blogs</Link></li>
                </ul>
                <div className="right">
                <div><DropDown/></div>
                <ul className="cart">
                    <li><Link to='/cart' style={{color:'#4D4D4D'}}>Cart</Link></li>
                    <li className="quantity" style={{color:"white"}}><Link to='/cart' style={{color:'white'}}>{quant}</Link></li>
                </ul>
                <div className="user"><BsPersonPlus className="icon"/></div>
                </div>
            </ div>
        
    )
}

export default Header;
