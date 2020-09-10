import React from 'react';
import Header from '../../Container/Top Nav Bar/Header';
import Index3 from '../Side Nav Bar/Index3';
import Search from '../Search Button/Search';
import './Home.css';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div>
           <Header/>
           <Index3/>
           <Search/>
           <h2 id='focus'>we focus on...</h2>
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
            <h2 className='work'>our work...</h2>
            <div className="grid">
                <div className='gcard1'></div>
                <div className='gcard2'></div>
                <div className='gcard3'></div>
                <div className='gcard4'></div>
                <div className='gcard5'></div>
                <div className='gcard6'></div>
                <div className='gcard7'></div>
            </div>
            <div className='cards'>
                <div className='rcard1'>
                    <span><Link to='/shop' style={{color:'#4D4D4D'}}>SHOP</Link></span>
                </div>
                <div className='rcard2'>
                    <span><Link to='/about' style={{color:'#4D4D4D'}}>ABOUT</Link></span>
                </div>
                <div className='rcard3'>
                    <span><Link to='/categories' style={{color:'#4D4D4D'}}>CATEGORIES</Link></span>
                </div>
                <div className='rcard4'>
                    <span><Link to='/query' style={{color:'#4D4D4D'}}>QUERY</Link></span>
                </div>
            </div>
            <Footer/>
           </div>
    )
}

export default Home