import React from 'react';
import Header from '../../Container/Top Nav Bar/Header';
import Index2 from '../../Container/Side Nav Bar/Index2';
import Footer from '../Footer/Footer';
import Search from '../Search Button/Search';
import './Profile.css';
function Profile(){
    return(
        <div>
            <Header/>
            <Index2/>
            <div className='shop'>
            < Search />
            </div>
            <h2 className='headlinee'>my profile...</h2>
            <div className="profileBox"> 
            <div className="boxNav">
               <h6 className="myProfile" >MY PROFILE</h6>
               <h6 className="myOrders" >MY ORDERS</h6>
            </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Profile