import React from 'react'
import Header from "../../Container/Top Nav Bar/Header";
import Footer from "../Footer/Footer";
import './Cart.css'

function Cart() {
    return (
        <div>
            <Header />
            <div className="paymentWay">
                <p className="mycartPayment">My cart</p>
                <hr className="mycartLineTo"></hr>
                <p className="orderPaymentChange">Order details</p>
                <hr className="orderSummaryPageLine"></hr>
                <p className="orderSummaryfinalPayment">Payment</p>
            </div>
            <p className="myCartHeadline">my cart...</p>
            <div className="myCartMainBox">
                <div className="CartBox">
                    <p className="itemNoHeading">2 Items</p>
                    <div className='givenOrderNo1'>
                        <div className='imageoftheProduct1'></div>
                        <div className='detailsoftheProduct1'>
                            <p className='nameoftheProductGiven'>Product Name will be written in maximum of two lines</p>
                            <p className='priceoftheGivenProduct'>Rs. 300/-</p>
                            <div className='tagsOfGivenProduct'>
                                <p style={{ color: '#2D2D2D', width: '2.928vw', height: '1.537vw' }}>Tags:</p>
                                <p style={{ color: '#ADADAD', width: '22.548vw' }}>choli, white, small</p>
                            </div>
                            <div className='descriptionofGivenProduct'>
                                <p style={{ color: '#2D2D2D', height: '1.537vw' }}>Description:</p>
                                <p style={{ color: '#ADADAD' }}>Lorem ipsum dolor sit amet, consetetur </p>
                            </div>

                        </div>
                    </div>
                    <div className='givenOrderNo2'>
                        <div className='imageoftheProduct1'></div>
                        <div className='detailsoftheProduct1'>
                            <p className='nameoftheProductGiven'>Product Name will be written in maximum of two lines</p>
                            <p className='priceoftheGivenProduct'>Rs. 300/-</p>
                            <div className='tagsOfGivenProduct'>
                                <p style={{ color: '#2D2D2D', width: '2.928vw', height: '1.537vw' }}>Tags:</p>
                                <p style={{ color: '#ADADAD', width: '22.548vw' }}>choli, white, small</p>
                            </div>
                            <div className='descriptionofGivenProduct'>
                                <p style={{ color: '#2D2D2D', height: '1.537vw' }}>Description:</p>
                                <p style={{ color: '#ADADAD' }}>Lorem ipsum dolor sit amet, consetetur </p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='referenceCodeBox'>
                    <p className='ReferenceCodeHeading'>Reference Code</p>
                    <div className='RefCodeBoxWithButton'>
                        <input className='RefCodeInput' type='text' placeholder='Enter Here'></input>
                        <button className='RefButton'>APPLY</button>
                    </div>
                    <div className='DiscountBox'>
                        <p className='DiscountHeading'>Discount:</p>
                        <p className='discountMoney'>00.00</p>
                    </div>
                    <div className="bagTotalPrice">
                        <p id="bagTotal">Bag Total(in rupees):</p>
                        <p id="bagTotalValue">600.00</p>
                    </div>
                    <a href='/orderSummary'><button className='RefProceedButton'>Proceed</button></a>

                </div>
            </div>
            <hr className='quend' />
            <div className='cardss'>
                <div className='rcardd1'>
                    <span><a href='/shop' style={{ color: '#4D4D4D' }}>SHOP</a></span>
                </div>
                <div className='rcard3'>
                    <span><a href='/categories' style={{ color: '#4D4D4D' }}>CATEGORIES</a></span>
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default Cart

