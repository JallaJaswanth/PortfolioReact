import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card'
import Resume from './Jalla Jaswanth.pdf'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'

function Services() {

    const transition = { duration: 1, type: 'spring' }

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className='services' id='Services'>
            <div className='awesome'>
                <span style={{ color: darkMode ? 'white' : '' }}>My Awesome</span>
                <span>Services</span>
                <spane>Blah Blah Blah Blah Blah Blah Blah BlahBlah Blah Blah Blah
                    <br />
                    Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
                </spane>
                <a href={Resume} download>
                    <button className='button s-button'>Download CV</button>
                </a>
                <div className='blur s-blur1' style={{ background: "#ABF1FF94" }}></div>
            </div>
            <div className='cards'>
                <motion.div
                    initial={{ left: '25rem' }}
                    whileInView={{ left: '14rem' }}
                    transition={transition}

                    style={{ left: '14rem' }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Design'}
                        detail={<span style={{ color: darkMode ? 'white' : '' }}>"Figma, Sketch, Photoshop, Adobe"</span>}
                    />
                </motion.div>
                <motion.div
                    initial={{ left: "-11rem", top: "12rem" }}
                    whileInView={{ left: "-4rem" }}
                    transition={transition}
                >
                    <Card
                        emoji={Glasses}
                        heading={"Developer"}
                        detail={<span style={{ color: darkMode ? 'white' : '' }}>"Html, Css, JavaScript, React, Figma, Sketch, Photoshop, Adobe"</span>}
                    />
                </motion.div>
                <motion.div
                    initial={{ top: "19rem", left: '25rem' }}
                    whileInView={{ left: "12rem" }}
                    transition={transition}
                >
                    <Card
                        emoji={Humble}
                        heading={"UI/UX"}
                        detail={<span style={{ color: darkMode ? 'white' : '' }}>Lorem ispum dummy text usually use in section where we need some random text"</span>}
                        color="rgba(252, 166, 31, 0.45)"
                    />
                </motion.div>
                <div className='blur s-blur2' style={{ background: "var(--purple)" }}></div>
            </div>
        </div>
    )
}

export default Services