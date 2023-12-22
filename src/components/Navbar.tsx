import { useState } from 'react'
import { Link } from 'react-router-dom'
//@ts-ignore
import logo from '../assets/images/tesla-9-logo.png'
import { useAuth0 } from '@auth0/auth0-react';

function Navbar() {
    const [isVisible, setIsVisible] = useState(false)
    const dropDown = () => {
        setIsVisible(!isVisible)
    }
    const clicked = () => {
        setIsVisible(false)
    }

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const signOutOnClick = () => {
        logout();
    };

    const signInOnClick = () => {
        loginWithRedirect();
    };

    return (
        <nav className='bg-slate-50 h-full py-3 flex justify-center'>
            <div className='grid grid-flow-col w-10/12'>
                <div className='flex w-auto items-center'>

                    <div className='mx-3 w-1/3 max-w-xs h-auto item-center' id='navlogo'>
                        <img src = {logo}  className='h-auto'/>
                    </div>

                    <div id='navbuttons' className='ps-5 py-2 text-gray-600 hidden md:flex'>
                        <button className='mx-2 bg-slate-200 rounded border-slate-300 border hover:bg-slate-600 hover:text-gray-200 w-16 py-2'>
                            <Link to='/'>Home</Link>
                        </button>
                        <button className= 'mx-2 bg-slate-200 rounded border-slate-300 border hover:bg-slate-600 hover:text-gray-200 w-16 py-2'>
                            <Link to='/vehicles'>Vehicles</Link>
                        </button>
                        <button className= 'mx-2 bg-slate-200 rounded border-slate-300 border hover:bg-slate-600 hover:text-gray-200 w-16 py-2'>
                            <Link to='/about'>Test</Link>
                        </button>
                        <button className= 'mx-2 bg-slate-200 rounded border-slate-300 border hover:bg-slate-600 hover:text-gray-200 w-16 py-2'>
                            <Link to='/cart'>Cart</Link>
                        </button>
                        
                    </div> 
                </div>
                <div className='justify-self-end hidden md:flex'>
                    <div className='px-1 py-2' id='loginbuttons'>
                    {
                    !isAuthenticated ? 
                    <button className='mx-2 bg-slate-200 rounded border-slate-300 border hover:bg-slate-600 hover:text-gray-200 w-16 py-2'>
                            <Link to="/" onClick={signInOnClick}>
                                Login
                            </Link>
                    </button>
                    :
                    <button className='mx-2 bg-slate-600 text-gray-200 rounded hover:bg-slate-200 hover:text-gray-600 w-16 py-2'>
                        <div>
                            <Link to="/" onClick={signOutOnClick}>
                                Sign Out
                            </Link>
                        </div>
                    </button>
                    }
                    </div>
                </div>   
            </div>
            <div className="md:hidden flex-grow text-end px-3">
                <button onClick={dropDown} className= 'bg-slate-200 rounded border-slate-300 border hover:bg-slate-600 hover:text-gray-200 w-14 py-3 mx-5'>
                    <i className='fas fa-bars'></i>
                </button>
                    { isVisible ? (
                        <div className='grid grid-rows-4 justify-end'>
                            <button className= 'mt-2 bg-slate-200 rounded border-slate-300 border hover:bg-slate-600 hover:text-gray-200 w-16 py-2'>
                                <Link to='/' onClick={ clicked}>Home</Link>
                            </button>
                            <button className= 'mt-2 bg-slate-200 rounded border-slate-300 border hover:bg-slate-600 hover:text-gray-200 w-16 py-2'>
                                <Link to='/vehicles' onClick={ clicked}>Vehicles</Link>
                            </button>
                            <button className= 'mt-2 bg-slate-200 rounded border-slate-300 border hover:bg-slate-600 hover:text-gray-200 w-16 py-2'>
                                <Link to='/about' onClick={ clicked}>Test</Link>
                            </button>
                            <button className= 'mt-2 bg-slate-200 rounded border-slate-300 border hover:bg-slate-600 hover:text-gray-200 w-16 py-2'>
                                <Link to='/cart' onClick={ clicked}>Cart</Link>
                            </button>
                            <button className='mt-2 bg-slate-200 rounded border-slate-300 border hover:bg-slate-600 hover:text-gray-200 w-16 py-2'>
                            Log In
                            </button>
                            <button className= 'mt-2 bg-slate-600 text-gray-200 rounded hover:bg-slate-200 hover:text-gray-600 w-16 py-2'>
                                Sign Up
                            </button>
                        </div>
                        ) : (
                        <></>
                        ) }
                </div>
            
        </nav>

    );}

export default Navbar