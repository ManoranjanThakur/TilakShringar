import React from 'react';
import Header from '../Top Nav Bar/Header';
import Footer from '../Footer/Footer';
import Index3 from '../Side Nav Bar/Index3';
import './About.css';
import { MdLocationOn} from "react-icons/md";
import { Link } from 'react-router-dom';

function About() {
    return (
        <div>
            <Header/>
            <Index3/>
            <div className='bheadandadd'>
                <div className='bhead'>Tilak Shringar</div>
                <MdLocationOn id='loc' viewBox='4 4 15.5 20'/>
                <p>The address will be in maximum 3 lines and it will be aligned left always.</p>
            </div>
            <h2 className='headline'>about us...</h2>
            <div className="imageAboutUs">
                <img src="https://cdn.wallpapersafari.com/64/18/5odw84.jpg" alt=""></img>
            </div>
            <p className="aboutUsPara">We are a group of Lord Krishna devotees who aim to bring you the latest designer Krishna clothes and accessories. We commenced our journey in 2013, seven years back, and employed housewives in Gandhinagar, Gujrat to make them feel empowered. This financial independence for housewives is our giving back to society. Each piece of cloth, accessory, ornament, and idols is crafted with at most dedication and devotion. By sitting in your comfort zone, at your home you get mesmerizing artifacts to dress up your Laddu Gopal and Radha Rani with elegance. You can view different products at one place on our user-friendly interface to with high- resolution images to make your hassle-free shopping experience worthwhile.</p>
            <p className="memoryOf">in the memory of...</p>
            <div className="memoryImage">
                <img src="https://i.pinimg.com/originals/98/81/02/988102527faa21e51a8ba5a9406bf6dd.jpg" alt=""></img>
            </div>
            <div className="yearMemory">
                <p className="nameBold">NAME IN BOLD</p>
                <p className="yearofMemory"> (1957-2020)</p>
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
        </div>
    )
}

export default About;
