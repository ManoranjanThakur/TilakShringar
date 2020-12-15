import React from 'react'
import Header from '../../Container/Top Nav Bar/Header';
import Index2 from '../../Container/Side Nav Bar/Index2';
import Search from '../Search Button/Search';
import Footer from '../Footer/Footer';
import './Categories.css';


const cards = {
    name: "Choli and Duppata",
    src: "https://i.pinimg.com/originals/98/81/02/988102527faa21e51a8ba5a9406bf6dd.jpg"
}
function Categories() {
    return (
        <div>
            <Header />
            <Index2 />
            <div className='shop'>
                < Search />
            </div>
            <h2 className='categoryheadlinee'>our categories..</h2>
            <div className='cardsl1'>
                <div className="cardNew"><img src={cards.src} alt='HR' />
                    <div className="figCaption" style={{ textAlign: "right" }}>
                        <h2>Choli and Duppata</h2>
                    </div>
                </div>
                <div className='card2'><img src={cards.src} alt='HR' />
                    <div className="figCaption" style={{ textAlign: "right" }}>
                        <h2>Choli and Duppata</h2>
                    </div>
                </div>
                <div className='card3'><img src={cards.src} alt='HR' />
                    <div className="figCaption" style={{ textAlign: "right" }}>
                        <h2>Choli and Duppata</h2>
                    </div>
                </div>
            </div>
            <div className='cardsl2'>
                <div className='card4'><img src={cards.src} alt='HR' />
                    <div className="figCaption" style={{ textAlign: "right" }}>
                        <h2>Choli and Duppata</h2>
                    </div>
                </div>
                <div className='card5'><img src={cards.src} alt='HR' />
                    <div className="figCaption" style={{ textAlign: "right" }}>
                        <h2>Choli and Duppata</h2>
                    </div>
                </div>
                <div className='card6'><img src={cards.src} alt='HR' />
                    <div className="figCaption" style={{ textAlign: "right" }}>
                        <h2>Choli and Duppata</h2>
                    </div>
                </div>
            </div>
            <div className='abqucard'>
                <div className='abcard'>
                    <span><a href='/about' style={{ color: '#4D4D4D' }}>ABOUT</a></span>
                </div>
                <div className='qucard'>
                    <span><a href='/query' style={{ color: '#4D4D4D' }}>QUERY</a></span>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Categories;