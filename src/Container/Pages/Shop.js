import React from 'react';
import Header from '../../Container/Top Nav Bar/Header';
import Index2 from '../../Container/Side Nav Bar/Index2';
import Search from '../Search Button/Search';
import Footer from '../Footer/Footer';
import './Shop.css';
import {TiHeartFullOutline} from "react-icons/ti";
import { BiCartAlt } from "react-icons/bi";
import { Link } from 'react-router-dom';

function Shop() {
    return (
        <div>
            <Header/>
            <Index2/>
            <div className='shop'>
                < Search />
            </div>
            <h2 className='headlinee'>our products...</h2>
            <div className='product1'>
                <div className="ii"> 
                    <div className="ii1"><BiCartAlt id="iii1"/></div> 
                    <div className="ii2"><TiHeartFullOutline id="iii2"/></div> 
                </div>
            </div>
            <div className='p1info'>
                <p2 id='product1i'><Link to='/product' style={{color:'#4D4D4D'}}>Product Name will be written in maximum of two lines</Link></p2>
                <p2 id='price1'>Rs. 300/-</p2>
            </div>
            <div className='product2'>
                <div className="ii"> 
                    <div className="ii1"><BiCartAlt id="iii1"/></div> 
                    <div className="ii2"><TiHeartFullOutline id="iii2"/></div> 
                </div>
            </div>
            <div className='p2info'>
                <p2 id='product2i'><Link to='/product' style={{color:'#4D4D4D'}}>Product Name will be written in maximum of two lines</Link></p2>
                <p2 id='price2'>Rs. 300/-</p2>
            </div>
            <div className='product3'><div className="ii"> 
                    <div className="ii1"><BiCartAlt id="iii1"/></div> 
                    <div className="ii2"><TiHeartFullOutline id="iii2"/></div> 
                </div></div>
            <div className='p3info'>
                <p2 id='product3i'><Link to='/product' style={{color:'#4D4D4D'}}>Product Name will be written in maximum of two lines</Link></p2>
                <p2 id='price3'>Rs. 300/-</p2>
            </div>
            <div className='product4'><div className="ii"> 
                    <div className="ii1"><BiCartAlt id="iii1"/></div> 
                    <div className="ii2"><TiHeartFullOutline id="iii2"/></div> 
                </div></div>
            <div className='p4info'>
                <p2 id='product4i'><Link to='/product' style={{color:'#4D4D4D'}}>Product Name will be written in maximum of two lines</Link></p2>
                <p2 id='price4'>Rs. 300/-</p2>
            </div>
            <div className='product5'><div className="ii"> 
                    <div className="ii1"><BiCartAlt id="iii1"/></div> 
                    <div className="ii2"><TiHeartFullOutline id="iii2"/></div> 
                </div></div>
            <div className='p5info'>
                <p2 id='product5i'><Link to='/product' style={{color:'#4D4D4D'}}>Product Name will be written in maximum of two lines</Link></p2>
                <p2 id='price5'>Rs. 300/-</p2>
            </div>
            <div className='product6'><div className="ii"> 
                    <div className="ii1"><BiCartAlt id="iii1"/></div> 
                    <div className="ii2"><TiHeartFullOutline id="iii2"/></div> 
                </div></div>
            <div className='p6info'>
                <p2 id='product6i'><Link to='/product' style={{color:'#4D4D4D'}}>Product Name will be written in maximum of two lines</Link></p2>
                <p2 id='price6'>Rs. 300/-</p2>
            </div>
            <div className='product7'><div className="ii"> 
                    <div className="ii1"><BiCartAlt id="iii1"/></div> 
                    <div className="ii2"><TiHeartFullOutline id="iii2"/></div> 
                </div></div>
            <div className='p7info'>
                <p2 id='product7i'><Link to='/product' style={{color:'#4D4D4D'}}>Product Name will be written in maximum of two lines</Link></p2>
                <p2 id='price7'>Rs. 300/-</p2>
            </div>
            <div className='product8'><div className="ii"> 
                    <div className="ii1"><BiCartAlt id="iii1"/></div> 
                    <div className="ii2"><TiHeartFullOutline id="iii2"/></div> 
                </div></div>
            <div className='p8info'>
                <p2 id='product8i'><Link to='/product' style={{color:'#4D4D4D'}}>Product Name will be written in maximum of two lines</Link></p2>
                <p2 id='price8'>Rs. 300/-</p2>
            </div>
            <div className='product9'><Link to='/product' style={{color:'#4D4D4D'}}/><div className="ii"> 
                    <div className="ii1"><BiCartAlt id="iii1"/></div> 
                    <div className="ii2"><TiHeartFullOutline id="iii2"/></div> 
                </div></div>
            <div className='p9info'>
                <p2 id='product9i'><Link to='/product' style={{color:'#4D4D4D'}}>Product Name will be written in maximum of two lines</Link></p2>
                <p2 id='price9'>Rs. 300/-</p2>
            </div>
            <div className='cards'>
                <div className='rrcard3'>
                    <span><Link to="/categories" style={{color:'#4D4D4D'}}>CATEGORIES</Link></span>
                </div>
                <div className='rrcard4'>
                    <span><Link to="/query" style={{color:'#4D4D4D'}}>QUERY</Link></span>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Shop
