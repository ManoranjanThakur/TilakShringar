import React from 'react';
import Header from '../../Container/Top Nav Bar/Header';
import Index2 from '../../Container/Side Nav Bar/Index2';
import Search from '../Search Button/Search';
import Footer from '../Footer/Footer';
import './Product.css';
import {TiHeartFullOutline} from "react-icons/ti";
import { BiCartAlt } from "react-icons/bi";
// import { Link } from 'react-router-dom';

var price=300;
function Product() {
    return (
        <div>
            <Header/>
            <Index2/>
            <div className='shop'>
            < Search />
            </div>
            <div className='breadcrumbs'>Breadcrumb</div>
            <h3 className='headlineee'>the product...</h3>
            <div className='productss'>
                <div className='productpic'>
                    <div className='ppic'></div>
                </div>
                <div className='productdes'>
                    <p>Product Name will be written in maximum of two lines</p>
                    <div className="icon2"><TiHeartFullOutline id="iconn2"/></div> 
                    <div className="icon1"><BiCartAlt id="iconn1"/></div> 
                    <span className='cost'>Rs. {price}/-</span>
                    <span className='tags'>Tags:</span>
                    <p2>choli, white, small,</p2>
                    <div className='descriptions'>
                        <span>Description:</span>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Product
