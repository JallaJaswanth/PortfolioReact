import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import { Link } from 'react-scroll/modules'

const Navbar = () => {
    return (
        <div className='n-wrapper'>
            <div className='n-left'>
                <div className='n-name'> JALLA </div>
                <Toggle />
            </div>
            <div className='n-right'>
                <div className='n-list'>
                    <ul style={{ listStyleType: 'none' }}>

                        <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                            <li>Home</li>
                        </Link>
                        <Link spy={true} to='Services' smooth={true}>
                            <li>Services</li>
                        </Link>
                        <Link spy={true} to='Experience' smooth={true}>
                            <li>Experience</li>
                        </Link>
                        <Link spy={true} to='Portfolio' smooth={true}>
                            <li>Protfolio</li>
                        </Link>
                        <Link spy={true} to='Testimonial' smooth={true}>
                            <li>Testimonial</li>
                        </Link>
                    </ul>
                </div>
            </div>

            <button className='button n-button'>Contact</button>
        </div>
    )
}

export default Navbar
