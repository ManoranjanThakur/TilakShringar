import React from 'react'
import Header from '../../Container/Top Nav Bar/Header';
import Index2 from '../../Container/Side Nav Bar/Index2';
import Search from '../Search Button/Search';
import Footer from '../Footer/Footer';
import'./Categories.css';
import { Link } from 'react-router-dom';
const cards = {
    name:"Choli and Duppata",
    src:"https://i.pinimg.com/originals/98/81/02/988102527faa21e51a8ba5a9406bf6dd.jpg"
}
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