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
            <div className='scards'>
                {/* <div className='scard1'>
                    <div className='scard1box'></div>
                        <h4>WHO IS "NAME OF FOUNDER": </h4>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
                    </div>
                <div className='scard2'>
                    <div className='scard2box'></div>
                        <h4>WHO IS "NAME OF FOUNDER": </h4>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
                </div>
                <div className='rightt'>
                    <h3>WHEN DID THIS IDEA CAME?: </h3>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore</p>
                    </div> */}
            </div>
            <div className="aboutUsDetails">
                <p className="aboutUsParaHeading">WHEN DID THIS IDEA CAME?</p>
                <p className="aboutUsPara"> We are a group of Lord Krishna devotees who aim to bring you the latest designer Krishna clothes and accessories. We commenced our journey in 2013, seven years back, and employed housewives in Gandhinagar, Gujrat to make them feel empowered. This financial independence for housewives is our giving back to society. Each piece of cloth, accessory, ornament, and idols is crafted with at most dedication and devotion.  
                By sitting in your comfort zone, at your home you get mesmerizing artifacts to dress up your Laddu Gopal and Radha Rani with elegance.
                You can view different products at one place on our user-friendly interface to with high-resolution images to make your hassle-free shopping experience worthwhile
</p>
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

export default About;
