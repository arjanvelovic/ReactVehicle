import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
//@ts-ignore
import logo from '../assets/images/tesla-9-logo.png'
import { useAuth0 } from '@auth0/auth0-react';
import Model3Transparent from '../assets/images/Model3Transparent.png'
import ModelSTransparent from '../assets/images/ModelSTransparent.png'
import ModelXTransparent from '../assets/images/ModelXTransparent.png'
import ModelYTransparent from '../assets/images/ModelYTransparent.png'
import CybertruckTransparent from '../assets/images/CybertruckTransparent.png'


function Navbar() {
    const [isVisible, setIsVisible] = useState(false)
    const [isVisible2, setIsVisible2] = useState(false)
    const [isVisible3, setIsVisible3] = useState(false)
    const dropDown = () => {
        setIsVisible(!isVisible)
    }
    const dropDown2 = () => {
        setIsVisible2(!isVisible2)
    }
    const dropDown3 = () => {
        setIsVisible3(!isVisible3)
    }

    const pullUp = () => {
        setIsVisible(false)
    }

    const pullUp2 = () => {
        setIsVisible2(false)
    }

    const pullUp3 = () => {
        setIsVisible(false)
        setIsVisible3(false)
    }

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const signOutOnClick = () => {
        logout();
    };

    const signInOnClick = () => {
        loginWithRedirect();
    };

    return (
    <nav className='flex bg-slate-50 h-full py-3 justify-center border-b border-slate-200'>
        <div className='grid grid-cols-2 md:grid-cols-4 w-10/12'>
            <div id='navlogo' className='flex items-center'>
                <Link to='/'><img src={logo} className='md:max-h-14 md:w-auto md:h-auto h-8 opacity-80 hover:opacity-100 transition duration-500'/></Link>
            </div>
            <div className='hidden md:flex col-span-2 items-center ms-2'>
                <button className='mx-2 bg-slate-100 rounded border-slate-200 border hover:bg-slate-600 hover:text-gray-200 w-20 h-12 transition duration-500'>
                    <Link to='/'>Home</Link>
                </button>
                <button onClick={dropDown2} className= 'mx-2 bg-slate-100 rounded border-slate-200 border hover:bg-slate-600 hover:text-gray-200 w-20 h-12 transition duration-500'>Vehicles</button>
                <button className= 'mx-2 bg-slate-100 rounded border-slate-200 border hover:bg-slate-600 hover:text-gray-200 w-20 h-12 transition duration-500'>
                    <Link to='/about'>Test</Link>
                </button>
                <button className= 'mx-2 bg-slate-100 rounded border-slate-200 border hover:bg-slate-600 hover:text-gray-200 w-20 h-12 transition duration-500'>
                    <Link to='/cart'>Cart</Link>
                </button>

            </div>
            <div className='hidden md:flex justify-self-end items-center'>
            {!isAuthenticated ? 
            <button className=' bg-slate-100 rounded border-slate-200 border hover:bg-slate-600 hover:text-gray-200 w-20 h-12 transition duration-500'>
                    <Link to="/" onClick={signInOnClick}>
                        Sign In
                    </Link>
            </button>
            :
            <button className='mx-2 bg-slate-600 text-gray-200 rounded hover:bg-slate-200 hover:text-gray-600 w-20 h-12 transition duration-500'>
                <div>
                    <Link to="/" onClick={signOutOnClick}>
                        Sign Out
                    </Link>
                </div>
            </button>
            }
            </div>
            <div className="md:hidden flex justify-end items-center">
                <button onClick={dropDown} className= 'transition duration-700 h-10 bg-slate-100 rounded border-slate-300 border hover:bg-slate-600 hover:text-gray-200 w-12'> <i className='fas fa-bars'></i> </button>
            </div>
        </div>

        { isVisible2 ? (
            <div className='hidden md:grid grid-cols-5 z-10 absolute bg-slate-50 mt-14 w-full gap-2'>
                <Link to='/model3' className='hover:opacity-70 transition duration-500 self-center justify-self-center text-center my-3' onClick={pullUp2}>
                    <img src={Model3Transparent} className='w-auto max-h-20'/>
                    Model 3
                </Link>
                <Link to='/models' className='hover:opacity-70 transition duration-500 self-center justify-self-center text-center my-3' onClick={pullUp2}>
                    <img src={ModelSTransparent} className='w-auto max-h-20'/>
                    Model S
                </Link>
                <Link to='/modelx' className='hover:opacity-70 transition duration-500 self-center justify-self-center text-center my-3' onClick={pullUp2}>
                    <img src={ModelXTransparent} className='w-auto max-h-20'/>
                    Model X
                </Link>
                <Link to='/modely' className='hover:opacity-70 transition duration-500 self-center justify-self-center text-center my-3' onClick={pullUp2}>
                    <img src={ModelYTransparent} className='w-auto max-h-20'/>
                    Model Y
                </Link>
                <Link to='/cybertruck' className='hover:opacity-70 transition duration-500 self-center justify-self-center text-center my-3' onClick={pullUp2}>
                    <img src={CybertruckTransparent} className='w-auto max-h-20'/>
                    Cybertruck
                </Link>
            </div>
            ) : (
            <></>
            ) }


        { isVisible ? (
            <div className='md:hidden grid grid-col-1 z-10 absolute bg-slate-50 mt-12 w-full'>
                <button className= 'mt-4 h-10 mx-24 bg-slate-200 rounded border-slate-300 border hover:bg-slate-600 hover:text-gray-200 transition duration-500'>
                    <Link to='/' onClick={pullUp}>Home</Link>
                </button>
                <button className= 'mt-3 h-10 mx-24 bg-slate-200 rounded border-slate-300 border hover:bg-slate-600 hover:text-gray-200 transition duration-500' onClick={dropDown3}>Vehicles</button>

                { isVisible3 ? (
                    <div className='md:hidden grid grid-col-1 bg-slate-50 mt-4 w-full'>
                        <Link to='/model3' className='hover:opacity-70 transition duration-500 self-center justify-self-center text-center my-3' onClick={pullUp3}>
                        <img src={Model3Transparent} className='w-auto max-h-20'/>
                        Model 3
                        </Link>
                        <Link to='/models' className='hover:opacity-70 transition duration-500 self-center justify-self-center text-center my-3' onClick={pullUp3}>
                            <img src={ModelSTransparent} className='w-auto max-h-20'/>
                            Model S
                        </Link>
                        <Link to='/modelx' className='hover:opacity-70 transition duration-500 self-center justify-self-center text-center my-3' onClick={pullUp3}>
                            <img src={ModelXTransparent} className='w-auto max-h-20'/>
                            Model X
                        </Link>
                        <Link to='/modely' className='hover:opacity-70 transition duration-500 self-center justify-self-center text-center my-3' onClick={pullUp3}>
                            <img src={ModelYTransparent} className='w-auto max-h-20'/>
                            Model Y
                        </Link>
                        <Link to='/cybertruck' className='hover:opacity-70 transition duration-500 self-center justify-self-center text-center my-3' onClick={pullUp3}>
                            <img src={CybertruckTransparent} className='w-auto max-h-20'/>
                            Cybertruck
                        </Link>
                    </div>
                    ) : (
                    <></>
                ) }



                <button className= 'mt-3 h-10 mx-24 bg-slate-200 rounded border-slate-300 border hover:bg-slate-600 hover:text-gray-200 transition duration-500'>
                    <Link to='/about' onClick={pullUp}>Test</Link>
                </button>
                <button className= 'mt-3 h-10 mx-24 bg-slate-200 rounded border-slate-300 border hover:bg-slate-600 hover:text-gray-200 transition duration-500'>
                    <Link to='/cart' onClick={pullUp}>Cart</Link>
                </button>
                <button className='mt-3 h-10 mx-24 bg-slate-200 rounded border-slate-300 border hover:bg-slate-600 hover:text-gray-200 transition duration-500'>
                Log In
                </button>
                <button className= 'mt-3 mb-4 h-10 mx-24 bg-slate-600 text-gray-200 rounded hover:bg-slate-200 hover:text-gray-600 transition duration-500'>
                    Sign Up
                </button>
            </div>
            ) : (
            <></>
            ) }
        
    </nav>
);}

export default Navbar