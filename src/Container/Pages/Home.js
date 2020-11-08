import React from 'react';
// import Pro from '../New Module/generateProducts'
import Index3 from '../Side Nav Bar/Index3';
import Search from '../Search Button/Search';
import './Home.css';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import Header from '../Top Nav Bar/Header';

const cards = {
        name:"Choli and Duppata",
        src:"https://www.wallpapertip.com/wmimgs/44-442882_laddu-gopal-wallpaper.jpg"
    }

function Home() {
    
    return (
        <div>
           
           <Header/>
           <Index3/>
           <Search/>
           <h2 id='focus'>we focus on...</h2>
           <div className='cardsl1'>
               <div className="card1"><img src={cards.src} alt='HR'/>
                   <span id='text1'>{cards.name}</span>
               </div>
               <div className='card2'><img src={cards.src} alt='HR'/>
                   <span id='text2'>{cards.name}</span>
               </div>
               <div className='card3'><img src={cards.src} alt='HR'/>
                   <span id='text3'>{cards.name}</span>
               </div>
            </div>
            <div className='cardsl2'>
               <div className='card4'><img src={cards.src} alt='HR'/>
                   <span id='text4'>{cards.name}</span>
               </div>
               <div className='card5'><img src={cards.src} alt='HR'/>
                   <span id='text5'>{cards.name}</span>
               </div>
               <div className='card6'><img src={cards.src} alt='HR'/>
                   <span id='text6'>{cards.name}</span>
               </div>
            </div>
            <h2 className='work'>our work...</h2>
            <div className="grid">
                <div className='gcard1'><img src={require("../images/gcard1.jpg")}></img></div>
                <div className='gcard2'><img src={require("../images/gcard2.jpg")}></img></div>
                <div className='gcard3'><img src={require("../images/gcard3.jpg")}></img></div>
                <div className='gcard4'><img src={require("../images/gcard4.jpg")}></img></div>
                <div className='gcard5'><img src={require("../images/gcard5.jpg")}></img></div>
                <div className='gcard6'><img src={require("../images/gcard6.jpg")}></img></div>
                <div className='gcard7'><img src={require("../images/gcard7.jpg")}></img></div>
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
            {/* <div className="popUp ">
                <div className="popUpcontent">
                    <div>
                        <div className="popupBody">
                            
                            <div id="soon">TILAK SHRINGAR COMING SOON!</div>
                        
                        </div>
                    </div>
                </div>
            </div> */}
           </div>
    )
    
}

export default Home