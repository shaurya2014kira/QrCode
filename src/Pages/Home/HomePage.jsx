import React from 'react';
import Navbar from '../../Components/navbar/Navbar';
import "./Homepage.scss"
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { GoUpload } from "react-icons/go";
import { Divider } from 'antd';
import { FaBoltLightning } from "react-icons/fa6";
import { CiMedicalMask } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { RiBodyScanLine } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { BsPass } from "react-icons/bs";
import Footer from '../../Components/Footer/Footer';


const HomePage = () => {
    return (
        <>
            <div> <Navbar /></div>
            <div className='row'>
                <div className='column1'>
                    <h1>Smart Visitor Management</h1>
                    <p>Our visitor management system is designed to make the check-in process simple and secure.

                        With our QR code-based system, visitors can check-in quickly and easily, and your front desk staff can manage and track all visitors seamlessly.</p>
                </div>
                <div className='column2'>
                    <img src="https://qdesq.imagekit.io/tr:h-555,q-20/image/upload/v1654694707/qy2zso9usedkbrmeqivi.gif" alt="" />
                </div>
            </div>
            <div className='section1'>
                <ul>
                    <li>SCAN</li>
                    <li>FILL</li>
                    <li>GENERATE</li>
                </ul>
                <h3>Its Super Easy!!</h3>
            </div>

            <div className='section2'>
                <section>
                    <h2>Scan the <span>QR</span> or</h2>
                    <h2> click on <span>try now</span></h2>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" alt="" />
                </section>

            </div>
            <div>
                <div className='section3'>
                    <section>
                        <span><MdOutlineQrCodeScanner size={40} />
                        </span>
                        <h3>SCAN</h3>
                        <p>the QR code, to</p>
                        <p>access the check-in</p>
                        <p>interface.</p>
                    </section>
                    <section>
                        <span><IoSearchOutline size={40} />

                        </span>
                        <h3>Fill</h3>
                        <p>all the required</p>
                        <p>details for a smooth</p>
                        <p>verification process.</p>
                    </section>
                    <section>
                        <span><GoUpload size={40} />

                        </span>
                        <h3>Generate</h3>
                        <p>your pass and you're</p>
                        <p>done!</p>

                    </section>

                </div>
                <Divider />

            </div>
            <div className='section4'>
                <h3>Check-in hassle free in a flash!</h3>
                <p>Experience the benefits of a modern, efficient, and secure visitor management system today. Try our QR code-based solution and see the difference it can make for your check-in experience.</p>
                <div className='section4-div'>
                    <section>
                        <FaBoltLightning  size={30}/>
                        <p>Lightning fast check-ins</p>
                    </section>
                    <section>
                        <CiMedicalMask size={30} />
                        <p>Covid-19 health declarations</p>
                    </section>
                    <section>
                        <CiStar size={30} />
                        <p>Branded welcome to visitors</p>
                    </section>
                    <section>
                        <RiBodyScanLine size={30} />
                        <p>Visitor authentication</p>
                    </section>
                    <section>
                        <CiUser  size={30}/>
                        <p>KYC compliant</p>
                    </section>
                    <section>
                        <BsPass size={30} />
                        <p>Digital visitor pass</p>
                    </section>
                </div>
            </div>
            <div>
                <Footer/>
            </div>

        </>
    )
}

export default HomePage;
