import React from 'react'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'
import Globe from  '../../assets/Globe.svg'

const LeftSidebar = () => {
    return (
        <div className='left-sidebar'>
            <nav className='side-nav'>
<<<<<<< HEAD
                <NavLink to='/' className='side-nav-links ' activeclassname='active'>
=======
                <NavLink to='/' className='side-nav-links' activeclassname='active'>
>>>>>>> 1c38d4eee3d4eb47221540dc3566cdf5e9e90f98
                    <p>Home</p>
                </NavLink>
                <div className='side-nav-div'>
                    <div><p>PUBLIC</p></div>
                    <NavLink to='/Questions' className='side-nav-links' activeclassname='active'>
                        <img src={Globe} alt="Globe" />
                        <p style={{paddingLeft: "10px"}}> Questions </p>
                    </NavLink>
                    <NavLink to='/Tags' className='side-nav-links' activeclassname='active' style={{paddingLeft: "40px"}}>
                        <p>Tags</p>
                    </NavLink>
                    <NavLink to='/Users' className='side-nav-links' activeclassname='active' style={{paddingLeft: "40px"}}>
                        <p>Users</p>
                    </NavLink>
<<<<<<< HEAD
                    <NavLink to='/Companies' className='side-nav-links' activeclassname='active' style={{paddingLeft: "40px"}}>
                        <p>Comapnies</p>
                    </NavLink>
=======
>>>>>>> 1c38d4eee3d4eb47221540dc3566cdf5e9e90f98
                </div>
            </nav>
        </div>
    )
}

export default LeftSidebar
