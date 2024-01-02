import {useEffect ,useRef, useState} from 'react';
import model3landing from '../assets/images/Model3Landing.jpg';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CreateForm from '../components/CreateForm';
//@ts-ignore
import future from '../assets/images/Future.png';
import screen from '../assets/images/teslascreen.jpg'
import chassis from '../assets/images/chassis.jpg'
import exploded from '../assets/images/exploded.jpg'
import ImageCarousel from '../components/ImageCarousel';
import InteriorCarousel from '../assets/info/InteriorCarousel';
import model3order from '../assets/images/model3order.jpg';


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


function Model3() {

    const goToTop = () => {        
        window.scrollTo(0, 0);        
    };
    useEffect(() => {
        goToTop()
    },[])

    const ref = useRef(null);
    const handleClick = () => {
    //@ts-ignore
    ref.current?.scrollIntoView({behavior: 'smooth'});
    };

    const ref2 = useRef(null);
    const handleClick2 = () => {
    //@ts-ignore
    ref2.current?.scrollIntoView({behavior: 'smooth'});
    };

    const ref3 = useRef(null);
    const handleClick3 = () => {
    //@ts-ignore
    ref3.current?.scrollIntoView({behavior: 'smooth'});
    };

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false)
        window.location.reload();
    };

    return (
    <div>
        <article className='article'>
            <img className='image' src={model3landing} alt="background" />
            <div className='header text-center text-white bg-black bg-opacity-70' id='ParagraphText'>
                <button onClick={handleClick} className='my-4 mx-8 underline hover:no-underline'>Features</button>
                <button onClick={handleClick2} className='my-4 mx-8 underline hover:no-underline'>Order</button>
                <button onClick={handleClick3} className='my-4 mx-8 underline hover:no-underline'>Specifications</button>
            </div>
            <div className='header2 text-center text-white' id='TitleText'>
                MODEL 3
            </div>
        </article>
        
        <div ref={ref} id = 'Features'>
            <div className='bg-gradient-to-b from-black to-gray-900 text-white pt-4 content-center grid justify-items-center bg-blend-luminosity'>
                <div className='text-center uppercase' id='HeaderText'>
                Features
                </div>
                <hr className='w-5/6 opacity-30'/>
                <div className='container grid grid-cols-1 md:grid-cols-2 text-center my-2 border-b-gray-600 border-b'>
                    <div className='md:m-2 mx-10'>
                        <img className='' src={future} alt="background" />
                    </div>
                    <div className='self-center md:m-2 mx-6 my-2'>
                        <div className='' id='SubtitleText'>The Future is Here</div>
                        <div className='container' id='ParagraphText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore atque nostrum voluptates in tempore repellendus ea nihil nemo unde placeat quibusdam, perferendis eveniet blanditiis numquam id asperiores iusto mollitia nulla cupiditate quam dicta laborum porro voluptas maiores? Maxime dignissimos fuga, ullam atque dolorum veniam velit explicabo, repellendus laudantium odit eligendi est modi quo voluptatem blanditiis aut. Veniam tempora, quis omnis sunt eligendi exercitationem aspernatur debitis numquam ad labore libero praesentium id dolorum beatae, eveniet architecto molestias ducimus. Rem, quas iure.</div>
                    </div> 
                </div>
                <div className='container grid grid-cols-1 md:grid-cols-2 text-center my-2 border-b-gray-600 border-b'>
                <div className='self-center md:m-2 mx-6'>
                        <div className='' id='SubtitleText'>Better Over Time</div>
                        <div className='container' id='ParagraphText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore atque nostrum voluptates in tempore repellendus ea nihil nemo unde placeat quibusdam, perferendis eveniet blanditiis numquam id asperiores iusto mollitia nulla cupiditate quam dicta laborum porro voluptas maiores? Maxime dignissimos fuga, ullam atque dolorum veniam velit explicabo, repellendus laudantium odit eligendi est modi quo voluptatem blanditiis aut. Veniam tempora, quis omnis sunt eligendi exercitationem aspernatur debitis numquam ad labore libero praesentium id dolorum beatae, eveniet architecto molestias ducimus. Rem, quas iure.</div>
                    </div>
                    <div className='md:m-2 mx-10 my-3'>
                        <img className='' src={screen} alt="background" />
                    </div>
                </div>
                <div className='container grid grid-cols-1 md:grid-cols-2 text-center my-2 '>
                    <div className='md:m-2 mx-10'>
                        <img className='' src={exploded} alt="background" />
                    </div>
                    <div className='self-center md:m-2 mx-6 my-2'>
                        <div className='' id='SubtitleText'>Engineered for Everyone</div>
                        <div className='container' id='ParagraphText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore atque nostrum voluptates in tempore repellendus ea nihil nemo unde placeat quibusdam, perferendis eveniet blanditiis numquam id asperiores iusto mollitia nulla cupiditate quam dicta laborum porro voluptas maiores? Maxime dignissimos fuga, ullam atque dolorum veniam velit explicabo, repellendus laudantium odit eligendi est modi quo voluptatem blanditiis aut. Veniam tempora, quis omnis sunt eligendi exercitationem aspernatur debitis numquam ad labore libero praesentium id dolorum beatae, eveniet architecto molestias ducimus. Rem, quas iure.</div>
                    </div> 
                </div>
            </div>
            <div className='bg-[#f7f7f7]'>
                <div className=' text-gray-800 grid grid-cols-1 justify-items-center justify-self-center self-center pt-4 lg:mx-32 xl:mx-40'>
                    <div className='text-center uppercase border-b-gray-400 border-b container mb-2' id='HeaderText'>
                        Comfort In Mind
                    </div>
                    <ImageCarousel carouselInfo={InteriorCarousel}></ImageCarousel>
                </div>
                <div className=' text-gray-800 grid grid-cols-1 justify-items-center justify-self-center pt-4 lg:mx-32 xl:mx-40'>
                    <div className='text-center uppercase border-b-gray-400 border-b container mb-2' id='HeaderText'>
                        Saftey First
                    </div>
                    <img className='' src={chassis} alt="background" />
                </div>
            </div>
            
        </div>
        <div ref={ref2} id='OrderNow'>

            <article className='article'>
                <img className='image' src={model3order} alt="background" />
                <div className='header2 text-center'>
                    <button className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white"
                        onClick={() => handleOpen()}>
                            Order Now
                    </button>
                    <Modal
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="keep-mounted-modal-title"
                        aria-describedby="keep-mounted-modal-description"
                        >
                        <Box sx={style}>
                            <CreateForm model='Model 3'/>
                        </Box>
                    </Modal>
                </div>
            </article>

                
       
        </div>
        

        <div style={{height: '155rem'}} />
        <div ref={ref3}>TODO: Add vehicle specifications</div>
        <div style={{height: '155rem'}} />
    </div>
    )
}

export default Model3