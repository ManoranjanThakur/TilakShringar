import React from 'react';
import Header from '../../Container/Top Nav Bar/Header';
import Footer from '../Footer/Footer';
import Aboutme from './Aboutme';
import { Link } from 'react-router-dom';
import './Admin.css'
function Admin(){
    return(
       <div>
           <Header/>
           <h2 className="heading">my profile...</h2>
           <div className="Aboutttt">
                <Aboutme/>
           </div>  
           <div className="adminBox">
               <div className="adminNav">
                   <h6 className="adminProducts"><Link to="/Admin" style={{color:'#4D4D4D'}}>PRODUCTS</Link></h6>
                   <h6 className="adminBilling"><Link to="/AdminBilling" style={{color:'#4D4D4D'}}>BILLING</Link></h6>
                   <h6 className="adminReseller"><Link to="/AdminReseller" style={{color:'#4D4D4D'}}>RESELLERS</Link></h6>
               </div>
               <div className="productLine">
                    <hr id='adminLine2'/>
                    <hr id='adminLine'/>
               </div>
               <div className="categoryProductBtn">
                   <button className="categoryBtn">ADD CATEOGRY</button>
                   <button className="productBtn">ADD PRODUCT</button>
                   <p className="productNumber">43,240 products in total</p>
               </div>
               <div className="SearchDrop"></div>
               <div className="AdminProductDetails"></div>
           </div>
           <hr className='endLine'/>
           <Footer/>
       </div>
    )
}
export default Admin