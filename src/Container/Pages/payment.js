import React from 'react';
import Header from '../../Container/Top Nav Bar/Header';
import Footer from '../Footer/Footer';
import './payment.css';

function payment() {
    return(
        <div>
            <Header/>

            <div className="paymentWay">
                <p className="mycartPayment">My cart</p>
                <hr className="mycartPaymentLine"></hr>
                <p className="orderPayment">Order details</p>
                <hr className="orderPaymentLine"></hr>
                <p className="finalPayment">Payment</p>
            </div>

            <p className="paymentHeadline">payment...</p>

            <div className="paymentBoxMain">
                <div className="paymentOption">
                    <p className="headingPaymentOption">Select payment option</p>
                    <div className="boxPaymentOption"></div>
                </div>
                <div className="summaryDetail">
                    <div className="priceSummarybox">
                        <p id="priceSummaryHeading">Price Summary</p>
                        <div className="discountPrice">
                            <p id="discountName">Discount:</p>
                            <p id="discountPriceValue">00.00</p>
                        </div>
                        <div className="bagTotalPrice">
                            <p id="bagTotal">Bag Total(in rupees):</p>
                            <p id="bagTotalValue">600.00</p>
                        </div>
                        <button id="confirmPayButton">Confirm and Pay</button>
                    </div>
                    <div className="userDetails">
                        <div className="userName">
                            <p id="nameHeading">Name:</p>
                            <p id="nameOfPerson">Mohit Gopal</p>
                        </div>
                        <div className="addressDetail">
                            <p id="useraddressDetail">My Address:</p>
                            <p className="addressLineDetail">
                            Address Line 1 Address line 2 Address line 3
                            </p>
                        </div>
                        <div className="landmarkDetails">
                            <p id="landmarkHeading">Landmark:</p>
                            <p id="locationUser">Location</p>
                        </div>
                        <div className="contactDetails">
                            <p id="contactHeading">Contact Number:</p>
                            <p id="phoneNoUser">9876543210</p>
                        </div>
                    </div>
                </div>
            </div>


            <hr className='quend'/>
            <div className='cardss'>
                <div className='rcardd1'>
                <span><a href='/shop' style={{color:'#4D4D4D'}}>SHOP</a></span>
                </div>
                <div className='rcard3'>
                <span><a href='/categories' style={{color:'#4D4D4D'}}>CATEGORIES</a></span>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default payment