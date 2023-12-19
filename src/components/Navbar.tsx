import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/tesla-9-logo.png'

function Navbar() {

    const [isVisible, setIsVisible] = useState(false)

    const dropDown = () => {
        setIsVisible(!isVisible)
    }

    const clicked = () => {
        setIsVisible(false)
    }


    return (

        <nav className='bg-slate-50 h-full py-6 flex justify-center'>
            <div className='grid grid-flow-col w-10/12'>
                <div className='flex w-auto items-center'>

                    <div className='mx-3 w-1/3 max-w-xs h-auto item-center' id='navlogo'>
                        <img src = {logo}  className='h-auto'/>
                    </div>

                    
                    <div id='navbuttons' className='ps-5 py-2 text-gray-600 hidden md:flex'>
                        <button className='mx-2 bg-slate-200 rounded border-slate-300 border hover:bg-slate-600 hover:text-gray-200 w-24 py-3'>
                            <Link to='/'>Home</Link>
                        </button>
                        <button className= 'mx-2 bg-slate-200 rounded border-slate-300 border hover:bg-slate-600 hover:text-gray-200 w-24 py-3'>
                            <Link to='/vehicles'>Vehicles</Link>
                        </button>
                        <button className= 'mx-2 bg-slate-200 rounded border-slate-300 border hover:bg-slate-600 hover:text-gray-200 w-24 py-3'>
                            <Link to='/about'>Test</Link>
                        </button>
                        <button className= 'mx-2 bg-slate-200 rounded border-slate-300 border hover:bg-slate-600 hover:text-gray-200 w-24 py-3'>
                            <Link to='/cart'>Cart</Link>
                        </button>
                        

                    </div>
                    
                </div>
                <div className='justify-self-end hidden md:flex'>
                    <div className='px-1 py-2' id='loginbuttons'>
                        <button className='mx-2 bg-slate-200 rounded border-slate-300 border hover:bg-slate-600 hover:text-gray-200 w-24 py-3'>
                            Log In
                        </button>
                        <button className= 'mx-2 bg-slate-200 rounded border-slate-300 border hover:bg-slate-600 hover:text-gray-200 w-24 py-3'>
                            Sign Up
                        </button>
                    </div>
                </div>
                
                
            </div>
            <div className="md:hidden flex-grow text-end px-3">
                        <button onClick={dropDown} className= 'bg-slate-200 rounded border-slate-300 border hover:bg-slate-600 hover:text-gray-200 w-14 py-3 mx-5'>
                            <i className='fas fa-bars'></i>
                        </button>
                            { isVisible ? (
                                <div className='grid grid-rows-4 justify-end'>
                                    <button className= 'mt-2 bg-slate-200 rounded border-slate-300 border hover:bg-slate-600 hover:text-gray-200 w-24 py-3'>
                                        <Link to='/' onClick={ clicked}>Home</Link>
                                    </button>
                                    <button className= 'mt-2 bg-slate-200 rounded border-slate-300 border hover:bg-slate-600 hover:text-gray-200 w-24 py-3'>
                                        <Link to='/about' onClick={ clicked}>About</Link>
                                    </button>
                                    <button className= 'mt-2 bg-slate-200 rounded border-slate-300 border hover:bg-slate-600 hover:text-gray-200 w-24 py-3'>
                                        <Link to='/dashboard' onClick={ clicked}>Dashboard</Link>
                                    </button>
                                    <button className= 'mt-2 bg-slate-200 rounded border-slate-300 border hover:bg-slate-600 hover:text-gray-200 w-24 py-3'>
                                        <Link to='/test' onClick={ clicked}>Test</Link>
                                    </button>
                                </div>
                                ) : (
                                <></>
                                ) }
                    </div>
            
        </nav>

        //  <div className='row w-full block flex-grow items-center'>
        //                 <div className="text-sm lg:flex-grow">
        //                  <button className='p-3 m-5 bg-teal-400 justify-center'>
        //                      <div>
        //                          <Link to='/' onClick={ clicked} className='flex place-itmes-center mt-4 lg:inline-block lg:mt-0
        //                          text-teal-200 hover:text-white mr-4'>
        //                              Home
        //                          </Link>
        //                      </div>

        //                  </button>
        //                  <button className='p-3 m-5 bg-teal-400 justify-center'>
        //                      <div>
        //                          <Link to='/about' onClick={ clicked} className='flex place-itmes-center mt-4 lg:inline-block lg:mt-0
        //                          text-teal-200 hover:text-white mr-4'>
        //                              About
        //                          </Link>
        //                      </div>

        //                  </button>
        //                  <button className='p-3 m-5 bg-teal-400 justify-center'>
        //                      <div>
        //                          <Link to='/dashboard' onClick={ clicked} className='flex place-itmes-center mt-4 lg:inline-block lg:mt-0
        //                          text-teal-200 hover:text-white mr-4'>
        //                              Dashboard
        //                          </Link>
        //                      </div>
        //                  </button>
        //                  <button className='p-3 m-5 bg-teal-400 justify-center'>
        //                      <div>
        //                             <Link to='/test' onClick={ clicked} className='flex place-itmes-center mt-4 lg:inline-block lg:mt-0
        //                          text-teal-200 hover:text-white mr-4'>
        //                              Test
        //                          </Link>
        //                      </div>
        //                  </button>
        //              </div>
        //             </div>



    );}

export default Navbar