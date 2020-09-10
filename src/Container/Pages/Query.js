import React from 'react';
import Header from '../../Container/Top Nav Bar/Header';
import Index2 from '../../Container/Side Nav Bar/Index2';
import Footer from '../Footer/Footer';
import './Query.css';
import { Link } from 'react-router-dom';

function Query() {
    return (
        <div>
            <Header/>
            <Index2/>
            <h2 className='headlineeee'>ask here...</h2>
            <div className='details'>
                <div className='userdetails'>
                    <p>Fill in the details</p>
                    <input type='text' placeholder='Full Name*'/>
                    <hr/>
                    <input type='text' placeholder='Email*'/>
                    <hr/>
                    <input type='text' placeholder='Order Number'/>
                    <hr/>
                    <input type='text' placeholder='Country'/>
                    <hr/>
                    <input type='text' placeholder='Subject'/>
                    <hr/>
                    <input type='text' placeholder='Message                                                                               0/200'/>
                    <hr/>
                    <button className='send'>Send</button>
                </div>
                <div className='emailadd'>
                    <p>Queries related to Purchase:</p>
                    <span>tilakshringar2@gmail.com</span>
                    <p>Queries related to business:</p>
                    <span>tilakshringar2@gmail.com</span>
                </div>
            </div>
            <hr className='quend'/>
            <div className='cardss'>
                <div className='rcardd1'>
                <span><Link to='/shop' style={{color:'#4D4D4D'}}>SHOP</Link></span>
                </div>
                <div className='rcard3'>
                <span><Link to='/categories' style={{color:'#4D4D4D'}}>CATEGORIES</Link></span>
                </div>
                
            </div>
            <Footer/>
        </div>
    )
}

export default Query
