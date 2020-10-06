import React from 'react';
import Header from '../../Container/Top Nav Bar/Header';
import Index2 from '../../Container/Side Nav Bar/Index2';
import Footer from '../Footer/Footer';
import Aboutme from './Aboutme';
import { Link } from 'react-router-dom';
import './myProfile.css';

function myProfile(){
    let name="Vasudeva Krishna"
    let email="Vasudeva@Krishna.com"
    let type="Customer"
    return(
        <div>
            <Header/>
            <Index2/>
            <h2 className='headlineew'>my profile...</h2>
            <div className="Aaboutme">
            <Aboutme/>
            </div>
            <div className="profileBox2"> 
                <div className="boxNav">
                    <h6 className="myProfile" ><Link to="/myprofile" style={{color:'#4D4D4D'}}>MY PROFILE</Link></h6>
                    <h6 className="myOrders" ><Link to="/profile" style={{color:'#4D4D4D'}}>MY ORDERS</Link></h6>
                    <h6 className="myAddress" ><Link to='/address' style={{color:'#4D4D4D'}}>MY ADDRESS</Link></h6>
                </div>
                <div className="forline">
                    <hr id='line2'/>
                    <hr id='line3'/>
                </div>
                <div className="allABoutMe">
                    <div className="aboutText">
                        <p >Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{name} </p>
                        <p >Email Address: &nbsp;{email}</p>
                        <p>Account Type:&nbsp; &nbsp;{type}</p>
                    </div> 
                    <button id="aboutEdit">EDIT</button>
                </div>
                <hr id="aboutEnd"/>
                <div className="changePassword">
                    <h3>Change Password:</h3>
                    <div className="passwordEdit">
                        <div>
                            <p>Previous Password:</p>
                            <input type="text" style={{color:"#4D4D4D", marginLeft:"4.204vw", font:"normal normal normal 1.098vw/1.684vw Poppins", border:"none",borderBottom:"0.073vw solid #ADADAD", marginTop:"0.110vw", height:"1.318vw", width:"15.102vw", outline:"none"}}></input>
                            <button style={{cursor:"pointer", height:"1.757vw", marginLeft:"7.045vw", textDecoration:"underline", color:"#707070", font:"normal normal normal 1.098vw/1.684vw Poppins" ,border:"none", marginTop:"0.110vw", padding:"0"}}>Forgot Password?</button>
                        </div>
                        <div>
                            <p>New Password:</p>
                            <input type="text" style={{color:"#4D4D4D", marginLeft:"6.442vw", font:"normal normal normal 1.098vw/1.684vw Poppins", border:"none",borderBottom:"0.073vw solid #ADADAD", marginTop:"0.110vw", height:"1.318vw", width:"15.102vw", outline:"none"}}></input>
                        </div>
                        <div>
                            <p>Re- enter Password:</p>
                            <input type="text" style={{color:"#4D4D4D", marginLeft:"3.692vw", font:"normal normal normal 1.098vw/1.684vw Poppins", border:"none",borderBottom:"0.073vw solid #ADADAD", marginTop:"0.110vw", height:"1.318vw", width:"15.102vw", outline:"none"}}></input>
                        </div>
                    </div>
                    <button id="passwordEdit">CHANGE</button>
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
export default myProfile