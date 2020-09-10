import React from 'react'
import Header from '../../Container/Top Nav Bar/Header';
import Index2 from '../../Container/Side Nav Bar/Index2';
import Search from '../Search Button/Search';
import Footer from '../Footer/Footer';
import'./Categories.css';
import { Link } from 'react-router-dom';
function Categories() {
    return (
        <div>
            <Header/>
            <Index2/>
            <div className='shop'>
            < Search />
            </div>
            <h2 className='headlinee'>our categories..</h2>
            <div className='cardsl1'>
               <div className='card1'>
                   <span id='text1'>Choli and Duppata</span>
               </div>
               <div className='card2'>
                   <span id='text2'>Choli and Duppata</span>
               </div>
               <div className='card3'>
                   <span id='text3'>Choli and Duppata</span>
               </div>
            </div>
            <div className='cardsl2'>
               <div className='card4'>
                   <span id='text4'>Choli and Duppata</span>
               </div>
               <div className='card5'>
                   <span id='text5'>Choli and Duppata</span>
               </div>
               <div className='card6'>
                   <span id='text6'>Choli and Duppata</span>
               </div>
            </div>
            <div className='abqucard'>
                <div className='abcard'>
                    <span><Link to='/about' style={{color:'#4D4D4D'}}>ABOUT</Link></span>
                </div>
                <div className='qucard'>
                    <span><Link to='/query' style={{color:'#4D4D4D'}}>QUERY</Link></span>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Categories;