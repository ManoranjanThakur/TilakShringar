import React from 'react';
import Header from '../Top Nav Bar/Header';
import Footer from '../Footer/Footer';
import Index3 from '../Side Nav Bar/Index3';
import './About.css';
import { MdLocationOn } from "react-icons/md";


function About() {
    return (
        <div>
            <Header />
            <Index3 />
            <div className='bheadandadd'>
                {/* <div className='bhead'><img src={require("../Top Nav Bar/02-01.png")}></img></div> */}
                <MdLocationOn id='loc' viewBox='4 4 15.5 20' />
                <p>The address will be in maximum 3 lines and it will be aligned left always.</p>
            </div>
            <h2 className='aboutheadline'>about us...</h2>
            <div className="imageAboutUs">
                <img src={require("../TilakAbout.jpg")} alt=""></img>
            </div>
            <p className="aboutUsPara">We are a group of Lord Krishna devotees who aim to bring you the latest designer Krishna clothes and accessories. We commenced our journey in 2013, seven years back, and employed housewives in Gandhinagar, Gujrat to make them feel empowered. This financial independence for housewives is our giving back to society. Each piece of cloth, accessory, ornament, and idols is crafted with at most dedication and devotion. By sitting in your comfort zone, at your home you get mesmerizing artifacts to dress up your Laddu Gopal and Radha Rani with elegance. You can view different products at one place on our user-friendly interface to with high- resolution images to make your hassle-free shopping experience worthwhile.</p>
            <p className="memoryOf">in the memory of...</p>
            <div className="memoryImage">
                <img src={require('../memoryImage.jpg')} alt=""></img>
            </div>
            <div className="yearMemory">
                <p className="nameBold">Sunita Devi</p>
                <p className="yearofMemory"> (1957-2020)</p>
            </div>


            <h2 className='work1'>our work...</h2>
            <div className="grid">
                <div className="gridImageBox1">
                    <div className="outerBoxGcard1">
                        <div className="slider1">
                            <img src="https://images.unsplash.com/photo-1605947464626-cbb0f72ee82d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=245&h=243&q=90"></img>
                            <img src="https://images.unsplash.com/photo-1605977216813-2db4874819b4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=245&h=243&q=60"></img>
                            <img src="https://images.unsplash.com/photo-1601758174114-e711c0cbaa69?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHw%3D&auto=format&fit=crop&w=245&h=243&q=60"></img>
                        </div>
                    </div>
                    <div className="outerBoxgcard2">
                        <div className="slider2">
                            <img src="https://images.unsplash.com/photo-1602524815375-a54449bb00fb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHw%3D&auto=format&fit=crop&w=245&h=243&q=60"></img>
                            <img src="https://images.unsplash.com/photo-1606024497281-11e62c427ae6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHw%3D&auto=format&fit=crop&w=245&h=243&q=60"></img>
                            <img src="https://images.unsplash.com/photo-1605952579405-6af27066ccfc?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2MHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=245&h=243&q=60"></img>
                        </div>
                    </div>
                </div>
                <div className="outerBoxgcard3">
                    <div className="slider3">
                        <img src="https://images.unsplash.com/photo-1606015218098-77835ec98075?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=245&h=507&q=60"></img>
                        <img src="https://images.unsplash.com/photo-1605976857294-4b925007560e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHw%3D&auto=format&fit=crop&w=245&h=507&q=60"></img>
                        <img src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHw%3D&auto=format&fit=crop&w=245&h=507&q=60"></img>
                    </div>
                </div>
                <div className="gridImageBox3">
                    <div className="outerBoxgcard4">
                        <div className="slider4">
                            <img src="https://images.unsplash.com/photo-1477322524744-0eece9e79640?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfDZzTVZqVExTa2VRfHxlbnwwfHx8&auto=format&fit=crop&w=507&h=245&q=60"></img>
                            <img src="https://images.unsplash.com/photo-1450631835004-9b95ff5cd66f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfDZzTVZqVExTa2VRfHxlbnwwfHx8&auto=format&fit=crop&w=507&h=245&q=60"></img>
                            <img src="https://images.unsplash.com/photo-1547845178-f8fc8f77f873?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfDZzTVZqVExTa2VRfHxlbnwwfHx8&auto=format&fit=crop&w=507&h=245&q=60"></img>
                        </div>
                    </div>
                    <div className="box3Inside">
                        <div className="outerBoxgcard5">
                            <div className="slider5">
                                <img src="https://images.unsplash.com/photo-1602524211687-aa9104ac4a2e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=245&h=243&q=60"></img>
                                <img src="https://images.unsplash.com/photo-1606114175460-31ba3462a098?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=245&h=243&q=60"></img>
                                <img src="https://images.unsplash.com/photo-1557687677-b4775034c47a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfHFQWXNEenZKT1ljfHxlbnwwfHx8&auto=format&fit=crop&w=245&h=243&q=60"></img>
                            </div>
                        </div>
                        <div className='outerBoxgcard6'>
                            <div className="slider6">
                                <img src="https://images.unsplash.com/photo-1605540168540-197f919758f7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8RnpvM3p1T0hONnd8fGVufDB8fHw%3D&auto=format&fit=crop&w=245&h=243&q=60"></img>
                                <img src="https://images.unsplash.com/photo-1604936168438-b3758e557568?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fHhqUFI0aGxrQkdBfHxlbnwwfHx8&auto=format&fit=crop&w=245&h=243&q=60"></img>
                                <img src="https://images.unsplash.com/photo-1605737886598-80ec0a15e6f1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfGJEbzQ4Y1Vod25ZfHxlbnwwfHx8&auto=format&fit=crop&w=245&h=243&q=60"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='outerBoxgcard7'>
                    <div className="slider7">
                        <img src="https://images.unsplash.com/photo-1605585844672-7faaa65a5f77?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8YWV1NnJMLWo2ZXd8fGVufDB8fHw%3D&auto=format&fit=crop&w=245&h=507&q=60"></img>
                        <img src="https://images.unsplash.com/photo-1605785699842-2080c0a0586a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8eEh4WVRNSExnT2N8fGVufDB8fHw%3D&auto=format&fit=crop&w=245&h=507&q=60"></img>
                        <img src="https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ul9GeW4tR3d0bHd8fGVufDB8fHw%3D&auto=format&fit=crop&w=245&h=507&q=60"></img>
                    </div>
                </div>

            </div>
            <div className='cards'>
                <div className='rcard1'>
                    <span><a href='/shop' style={{ color: '#4D4D4D' }}>SHOP</a></span>
                </div>
                <div className='rcard2'>
                    <span><a href='/about' style={{ color: '#4D4D4D' }}>ABOUT</a></span>
                </div>
                <div className='rcard3'>
                    <span><a href='/categories' style={{ color: '#4D4D4D' }}>CATEGORIES</a></span>
                </div>
                <div className='rcard4'>
                    <span><a href='/query' style={{ color: '#4D4D4D' }}>QUERY</a></span>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About;
