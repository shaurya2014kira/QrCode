import React from 'react'
import{Divider} from "antd"
import "./Footer.scss"
import { TiMessage } from "react-icons/ti";
import { MdOutlineLocalPhone } from "react-icons/md";

const Footer = () => {
  return (
    <div className='section'>
        <h1>Start your journey with us today!</h1>
        <Divider/>
        <div className='section-div'>
            <section>
                <img src='https://vyaparwebsiteimages.vypcdn.in/marketing-images/images/qr-code-scanner-file-upload/how-to-scan-qr-code-with-image.webp'   />
            </section>
            <section>
                <h3>Contact Us</h3>
               <ul >
                <li> <span><TiMessage /> </span>For Sales</li>
                <li><span><TiMessage /> </span>For support</li>
                <li><span><TiMessage /> </span>For Legal</li>
                <li><MdOutlineLocalPhone />123456789</li>
               </ul>
            </section>
        </div>
        
        <Divider/>
            <p >&copy; {new Date().getFullYear()} Shaurya. All rights reserved.</p>
      
    </div>
  )
}

export default Footer
