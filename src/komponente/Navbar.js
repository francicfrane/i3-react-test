import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return  (<nav className='clearfix' id='navbar'> <ul>
                    <li><Link to ='/'>Home</Link></li>
                    <li><Link to ='./prva'>Page 1</Link></li>
                    <li className='logowrap'>
                        <div className='logo'/>
                    </li>
                    <li><Link to='./druga'>Page 2</Link></li>
                    <li>
                        Dropdown <span className='strelica'>▾</span>
                        <ul className='dropdown'>
                            <li>prvi</li>
                            <li>drugi</li>
                            <li>treci</li>
                        </ul>
                    </li>
                </ul>
            </nav>
    )
    
}

export default Navbar
