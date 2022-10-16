import React from 'react'
import './Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import profilepic1 from "../../img/profile1.jpg"
import profilepic2 from "../../img/profile2.jpg"
import profilepic3 from "../../img/profile3.jpg"
import profilepic4 from "../../img/profile4.jpg"
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'

const Testimonial = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const clients = [{
        img: profilepic1,
        review: <span style={{ color: darkMode ? 'white' : '' }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</span>
    },
    {
        img: profilepic2,
        review: <span style={{ color: darkMode ? 'white' : '' }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</span>
    },
    {
        img: profilepic3,
        review: <span style={{ color: darkMode ? 'white' : '' }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</span>
    },
    {
        img: profilepic4,
        review: <span style={{ color: darkMode ? 'white' : '' }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</span>
    },

    ]
    return (
        <div className='t-wrapper' id='Testimonial'>
            <div className="t-heading">
                <span>Clients always get </span>
                <span> Exceptional Work </span>
                <span> from me....</span>
                <div className='blur t-blur1' style={{ background: "var(--purple" }}></div>
                <div className='blur t-blur1' style={{ background: "var(--skyblue" }}></div>
            </div>
            {/*Slider */}
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {clients.map((client, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className='testimonial'>
                                <img src={client.img} alt='' />
                                <span>{client.review}</span>
                            </div>

                        </SwiperSlide>
                    )
                })}

            </Swiper>
        </div>
    )
}

export default Testimonial