import React from 'react';
import Header from '../../Container/Top Nav Bar/Header';
import Index2 from '../../Container/Side Nav Bar/Index2';
import Footer from '../Footer/Footer';
// import Search from '../Search Button/Search';
import './Address.css';
import { Link } from 'react-router-dom';
import {AiOutlineCheckCircle} from "react-icons/ai";
import Aboutme from './Aboutme';
function Address(){
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
            <div className="addressBox">
                <div className="boxNav">
                    <h6 className="myProfile" ><Link to="/myprofile" style={{color:'#4D4D4D'}}>MY PROFILE</Link></h6>
                    <h6 className="myOrders" ><Link to="/profile" style={{color:'#4D4D4D'}}>MY ORDERS</Link></h6>
                    <h6 className="myAddress" ><Link to='/address' style={{color:'#4D4D4D'}}>MY ADDRESS</Link></h6>
                </div>
                <div className="forline">
                    <hr id="line001"></hr>
                    <hr id='line002'></hr>
                    <hr id='line003'></hr>
                </div>
                <div className="addressNo">
                    <div className="myAddresss"> 
                       <span className="myyAddressss"> My Address: </span>
                       <div className="myaddressLine">
                         <span className="addressLine1">Address Line 1 </span>
                         <span className="addressLine2">Address Line 2 </span>
                         <span className="addressLine3">Address Line 3 </span>
                       </div>
                       <span><AiOutlineCheckCircle id="addressIcon" style={{color:'#4DD101'}}/></span>
                    </div>
                    <div className="addressContact">
                        <span className="addressContactNo">Contact Number:</span>
                        <span className="addressMobileNo">9876543210</span>
                    </div>
                    <span className="editBox">Edit</span>
                </div>
                <div className="addressEdit">
                    <div className="myaddressEdit">
                        <span className="addressEditmy">My Address:</span>
                        <div className="inputBox">
                        <input type="text" id="input1" style={{color:'#2D2D2D'}} placeholder="House No./Flat No." ></input>
                        <input type="text" id="input2" style={{color:"#2D2D2D"}} placeholder="Area/Street"></input>
                        <input type="text" id="input3" style={{color:"#2D2D2D"}} placeholder="City/District"></input>
                        </div>
                    </div>
                    <div className="contactEdit">
                        <span className="contactNoEdit">Contact Number:</span>
                        <div className="input4">
                        <input type="text" id="input4" style={{color:"#2D2D2D"}} placeholder="Contact No."></input>
                        </div>
                    </div>
                    <div className="cancelButton">
                        <span className="cancel">Cancel</span>
                        <span className="saveButton">Save</span>
                    </div>
                </div>
                <button className="buttonAdd">Add another</button>
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
export default Address