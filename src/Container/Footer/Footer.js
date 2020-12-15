import React from 'react'
import './Footer.css';
import { FaPhoneAlt } from "react-icons/fa";
import { GrMail} from "react-icons/gr";
import { GoLocation} from "react-icons/go";
import { BiCopyright} from 'react-icons/bi';

function Footer() {
    return (
        <div className='footer'>
        <div className='f1'><b>Want latest updates? Just subscribe</b>
            <div className="emaildiv">
            <input type='text' placeholder='Email' className='email'></input><button className='ok' style={{cursor:"pointer"}}>OK</button>
            </div>
        </div>
        
        <div className='f2'>
            <span>Contact - <br/> <FaPhoneAlt /> &nbsp;&nbsp;  9876543210 <br/>
                <br/>
                Email Address - <br/>
                <GrMail/> &nbsp;&nbsp;  Examplewebsite@gmail.com <br/>
                <br/>
                Address - <br/> <GoLocation/> &nbsp;&nbsp; 123 A Random Address, Random City, PIN CODE</span>
        </div>
        <div className='f3'>
            <p className="f3a">About Us</p>
            <p className="f3b">Refund Policy</p>
            <p className="f3c">Privacy Policy</p>
            <p className="f3d">Track your Order</p>
            <p className="f3e">Return your Order</p>
        </div>
        <div className='f4'>Tilak Shringar | <BiCopyright /> All rights reserved 2020</div>

    </div>
    )
}

export default Footer
