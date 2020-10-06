import React from 'react';
import Header from '../../Container/Top Nav Bar/Header';
import Index2 from '../../Container/Side Nav Bar/Index2';
import Footer from '../Footer/Footer';
// import Search from '../Search Button/Search';
import Aboutme from './Aboutme';
import './Profile.css';
import { Link } from 'react-router-dom';
function Profile(){
    return(
        <div>
            <Header/>
            <Index2/>
            {/* <div className='shop'>
            < Search />
            </div> */}
            <h2 className='headlineew'>my profile...</h2>
            <div className="Aaboutme">
            <Aboutme/>
            </div>
            <div className="profileBox"> 
                <div className="boxNav">
<<<<<<< HEAD
                    <h6 className="myProfile" ><Link to="/myprofile" style={{color:'#4D4D4D'}}>MY PROFILE</Link></h6>
                    <h6 className="myOrders" ><Link to="/profile" style={{color:'#4D4D4D'}}>MY ORDERS</Link></h6>
                    <h6 className="myAddress" ><Link to='/address' style={{color:'#4D4D4D'}}>MY ADDRESS</Link></h6>
                </div>
                <div className="forline"> 
                    <hr id='line0'></hr>
                    <hr id='line00'></hr>
                    <hr id='line000'></hr>
                </div>
=======
                    <h6 className="myProfile" >MY PROFILE</h6>
                    <h6 className="myOrders" >MY ORDERS</h6>
                    <h6 className="myAddress" >MY ADDRESS</h6>
                </div>
                <hr id='lineeee'></hr>
                <hr id='lineeee2'></hr>
>>>>>>> eb624436021855f8ff6c180b80af8dca7c1d0a7a
                <div className="orderBox">
                    <div className="orderID">
                        <h6>1</h6>
                        <span className='orderidd'>Order ID:</span>
                        <span className="orderNo">323232DS</span>
                        <span className="closeDetail">Close details</span>
                    </div>
                    <div className="datee">
                        <span className="dateeW">Date:</span>
                        <span className="month">27th August 2020</span>
                    </div>
                    <div className="Amount">
                        <span className="totalAmount">Total Amount:</span>
                        <span className="amountRs">Rs. 1,000/-</span>
                    </div>
                    <div className="Payment">
                        <span className="paymentMode">Payment Mode:</span>
                        <span className="COD">Cash on delivery</span>
                    </div>
                    <div className="statusBox">
                        <span className="Status">Status:</span>
                        <span className="outDelivery">Out for Delivery</span>
                    </div>
                    <div className="itemBox">
                        <span className="items">Items:</span>
                    </div>
                    <hr id='orderLine'></hr>
                    <div className="orderProduct">
                        <div className="orderProductBox">
                             <span className="imageBox"></span>
                             <div className="ppproductName">
                                     <span className="pppproductName">Product Name</span>
                                     <span className="productPricee">Price: 500/-</span>
                                     <span className="productSize">Size: M</span>
                             </div>
                        </div>
                        <div className="orderProductBox2">
                             <span className="imageBox"></span>
                             <div className="ppproductName">
                                     <span className="pppproductName">Product Name</span>
                                     <span className="productPricee">Price: 500/-</span>
                                     <span className="productSize">Size: M</span>
                             </div>
                        </div>
                    </div>
                </div>
<<<<<<< HEAD
                <div className="secondBoxOrder">
                    <div className="secondOrderID">
                        <h6>2</h6>
                        <span className='orderidd'>Order ID:</span>
                        <span className="orderNo">323232DS</span>
                        <span className="closeDetail">See details</span>
                    </div>
                    <div className="datee">
                        <span className="dateeW">Date:</span>
                        <span className="month">27th August 2020</span>
                    </div>
                    <div className="statusBox">
                        <span className="Status">Status:</span>
                        <span className="Delivered">Delivered</span>
                    </div>
                </div>
=======
>>>>>>> eb624436021855f8ff6c180b80af8dca7c1d0a7a
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
export default Profile
