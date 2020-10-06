import React from 'react'
import Header from '../../Container/Top Nav Bar/Header';
import Index2 from '../../Container/Side Nav Bar/Index2';
import Search from '../Search Button/Search';
import Footer from '../Footer/Footer';
import {TiHeartFullOutline} from "react-icons/ti";
import'./Cart.css';
import { Link } from 'react-router-dom';
var money=600;
function Cart() {
    return (
        <div>
            <Header/>        
            <Index2/>
            <div className='shop'>
                <Search/>
            </div>
            <h2 className='headlinee'>my cart...</h2>
            <div className='producttt1'>
                <span>1</span>
                <div className='imgblock'></div>
                <div className='prodescription'>
                    <div className='nameandwishbox'>
                        <p>Product Name will be written in maximum of two lines</p>
                        <div className="wishlisttbox"><TiHeartFullOutline id="wishlistt"/></div> 
                    </div>
                    <div id='moneyy' >Rs. {money}/-</div>
                    <div className='tagbox'>
                        <span>Tags:</span>
                        <p>choli, white, small</p>
                    </div>
                    <div className='descriptionboxx'>
                        <span>Description:</span>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                    </div>
                </div>
            </div>
            <div className='producttt1'>
                <span>2</span>
                <div className='imgblock'></div>
                <div className='prodescription'>
                    <div className='nameandwishbox'>
                        <p>Product Name will be written in maximum of two lines</p>
                        <div className="wishlisttbox"><TiHeartFullOutline id="wishlistt"/></div> 
                    </div>
                    <div id='moneyy' >Rs. {money}/-</div>
                    <div className='tagbox'>
                        <span>Tags:</span>
                        <p>choli, white, small</p>
                    </div>
                    <div className='descriptionboxx'>
                        <span>Description:</span>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                    </div>
                </div>
            </div>
            <div className='checkoutt'>
                <span>Checkout : Rs. 1200/-</span>
            </div>
            <div className="Shadow">
                <div className='billl'>
                    <p>Address</p>
                    <div className='addresss'>
                        <p>Address Line 1</p>
                        <p>Address Line 2</p>
                        <p>Address Line 3</p>
                    </div>
                    <p className='changeadd'>Change</p>
                </div>
                <div className='contactno'>
                        <p>Contact Number</p>
                        <span>9871xxxxx5</span>
                </div>
            </div>
            <hr id='linee'></hr>
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

export default Cart

