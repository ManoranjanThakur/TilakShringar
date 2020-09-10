import React from 'react';
import './Index3.css'
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineClockCircle} from "react-icons/ai"
import { GrMail} from "react-icons/gr";
function Index3() {
    return (
            <div className="sidenvbar">
                <div className="sidetop">CATEGORY -
                     <li>Dresses</li>
                     <li>Jewellery</li>
                     <li>Ornaments</li>
                     <li>Bed</li>
                </div>
                <div className="sidemid">
                     <span>ELEVATOR PITCH OF TILAK SHRINGAR -</span>
                        <span>Lorem ipsum dolor sit amet,
                        consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor
                        invidunt ut labore et dolore magna aliquyam
                        </span>
                </div>
                <div className="sidebottom">
                    <span>For any query: <br/>
                        <FaPhoneAlt/>  Contact : 9876543210 <br/>
                        <br/>
                        <AiOutlineClockCircle/>  Working Hours: 8AM-8PM <br/>
                        <br/>
                        <GrMail/> Email Address - 
                        Examplewebsite@gmail.com</span>
                </div>
            </ div>        
    )
}

export default Index3


