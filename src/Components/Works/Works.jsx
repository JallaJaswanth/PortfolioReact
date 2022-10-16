import React from 'react'
import './Works.css'
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'


export const Works = () => {


    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="works">
            <div className='awesome'>
                <span style={{ color: darkMode ? 'white' : '' }}>Works for all these</span>
                <span>Brands & Clients</span>
                <spane>"Lorem ipsum dolor sit amet, consectetur

                    <br />
                    adipiscing elit, sed do eiusmod tempor incididunt ut
                    <br />
                    labore et dolore magna aliqua. Ut enim ad minim veniam,
                    <br />
                    quis nostrud exercitation ullamco laboris nisi ut aliquip
                </spane>

                <button className='button s-button'>Hire Me</button>

                <div className='blur s-blur1' style={{ background: "#ABF1FF94" }}></div>
            </div>
            {/*Right Side */}
            <div className="w-right">
                <motion.div
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: '-40px' }}
                    transition={{ duration: 3.5, type: 'spring' }}
                    className="w-mainCircle">
                    <div className='w-secCircle'>
                        <img src={Upwork} alt="" />
                    </div>
                    <div className='w-secCircle'>
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className='w-secCircle'>
                        <img src={Amazon} alt="" />
                    </div>
                    <div className='w-secCircle'>
                        <img src={Shopify} alt="" />
                    </div>
                    <div className='w-secCircle'>
                        <img src={Facebook} alt="" />
                    </div>
                </motion.div>
                {/*BackGround Circle */}
                <div className='w-backCircle blueCircle'></div>
                <div className='w-backCircle yellowCircle'></div>
            </div>


        </div>
    )
}
