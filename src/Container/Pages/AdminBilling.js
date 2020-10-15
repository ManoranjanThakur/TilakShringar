import React from 'react';
import Header from '../../Container/Top Nav Bar/Header';
import Footer from '../Footer/Footer';
import AdminProfile from './AdminProfile';
import { Link } from 'react-router-dom';
import './AdminBilling.css'

function AdminBilling(){
    return(
       <div>
           <Header/>
           <h2 className="heading">my profile...</h2>
           <div className="Aboutttt">
                <AdminProfile/>
           </div>  
           <div className="adminBox">
           <div className="adminNav">
                   <h6 className="adminProducts"><Link to="/Admin" style={{color:'#4D4D4D'}}>PRODUCTS</Link></h6>
                   <h6 className="adminBilling"><Link to="/AdminBilling" style={{color:'#4D4D4D'}}>BILLING</Link></h6>
                   <h6 className="adminReseller"><Link to="/AdminReseller" style={{color:'#4D4D4D'}}>RESELLERS</Link></h6>
               </div>
               <div className="productLine">
                    <hr id = "billingLine1"></hr>
                    <hr id='billingLine2'/>
                    <hr id='billingLine3'/>
               </div>
               <div className="categoryProductBtn">
                   <button className="categoryBtn">DOWNLOAD LIST</button>
                   <button className="productBtn">EMPTY SECTION</button>
                   <p className="productNumber">5000 products sold</p>
               </div>
               <div className="SearchBilling"></div>
               <div className="AdminProductDetails">
               <div className="billingCols">
                   <p className="serialNo">S. No.</p>
                   <p className="orderIdBill">Ordered ID</p>
                   <p className="orderDateBill">Ordered Date</p>
                   <p className="orderStatusBill">Status</p>
                   <p className="orderQuantityBill">Quantities</p>
                   <p className="orderUserType">User Type</p>
                   <p className="orderNameBill">Name</p>
                   <p className="orderTotalAmount">Total Amount</p>
                   <p className="orderPaymentMethod">Payment Method</p>
               </div>
               <hr id="AdminLine"></hr>
               <div className="productDetailsAdmin">
                   <div className="person1details">
                       <p className="oneSerial">1.</p>
                       <p className="oneId">444444</p>
                       <p className="oneDate">23 Sep 2020</p>
                       <p className="oneStatus">Delivered</p>
                       <p className="oneQuantity">15</p>
                       <p className="oneUsertype">Customer</p>
                       <p className="oneName">Mohit Gopal</p>
                       <p className="oneTotal">3000.00</p>
                       <p className="onePayment">Net Banking</p>
                   </div>
               </div>
               </div>
               
               
           </div>
           <hr className='endLine'/>
           <Footer/>
       </div>
    )
}
export default AdminBilling
