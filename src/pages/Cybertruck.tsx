import {useEffect ,useRef, useState} from 'react';
//@ts-ignore
import cybertrucklanding from '../assets/images/cybertrucklanding.jpeg'
//@ts-ignore
import future from '../assets/images/Future.png';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CreateForm from '../components/CreateForm';


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


function Cybertruck() {

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
            <img className='image' src={cybertrucklanding} alt="background" />
            <div className='header text-center text-white bg-black bg-opacity-70 text-xl'>
                <button onClick={handleClick} className='my-4 mx-8 underline hover:no-underline'>Features</button>
                <button onClick={handleClick2} className='my-4 mx-8 underline hover:no-underline'>Order</button>
                <button onClick={handleClick3} className='my-4 mx-8 underline hover:no-underline'>Specifications</button>
            </div>
            <div className='header2 text-center text-white text-7xl'>
                Cybertruck
            </div>
        </article>
        
        <div ref={ref} id = 'Features'>
            <div className='bg-black bg-opacity-90 text-white pt-4 content-center grid justify-items-center'>
                <div className='text-center text-5xl uppercase'>
                Features
                </div>
                <div className='container grid grid-cols-2 text-center my-2'>
                    <div className=' shadow-xl'>
                        <img className='image ring-1' src={future} alt="background" />
                    </div>
                    <div className='grid self-center'>
                        <div className='text-2xl'>The Future is Here</div>
                        <div className='container'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore atque nostrum voluptates in tempore repellendus ea nihil nemo unde placeat quibusdam, perferendis eveniet blanditiis numquam id asperiores iusto mollitia nulla cupiditate quam dicta laborum porro voluptas maiores? Maxime dignissimos fuga, ullam atque dolorum veniam velit explicabo, repellendus laudantium odit eligendi est modi quo voluptatem blanditiis aut. Veniam tempora, quis omnis sunt eligendi exercitationem aspernatur debitis numquam ad labore libero praesentium id dolorum beatae, eveniet architecto molestias ducimus. Rem, quas iure.</div>
                    </div> 
                </div>
                <div className='container grid grid-cols-2 text-center my-2'>
                    <div className='grid self-center'>
                        <div className='text-2xl'>The Future is Here</div>
                        <div className='container'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore atque nostrum voluptates in tempore repellendus ea nihil nemo unde placeat quibusdam, perferendis eveniet blanditiis numquam id asperiores iusto mollitia nulla cupiditate quam dicta laborum porro voluptas maiores? Maxime dignissimos fuga, ullam atque dolorum veniam velit explicabo, repellendus laudantium odit eligendi est modi quo voluptatem blanditiis aut. Veniam tempora, quis omnis sunt eligendi exercitationem aspernatur debitis numquam ad labore libero praesentium id dolorum beatae, eveniet architecto molestias ducimus. Rem, quas iure.</div>
                    </div>
                    <div className=' shadow-xl'>
                        <img className='image ring-1' src={future} alt="background" />
                    </div> 
                </div>
                <div className='container grid grid-cols-2 text-center my-2'>
                    <div className=' shadow-xl'>
                        <img className='image ring-1' src={future} alt="background" />
                    </div>
                    <div className='grid self-center'>
                        <div className='text-2xl'>The Future is Here</div>
                        <div className='container'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore atque nostrum voluptates in tempore repellendus ea nihil nemo unde placeat quibusdam, perferendis eveniet blanditiis numquam id asperiores iusto mollitia nulla cupiditate quam dicta laborum porro voluptas maiores? Maxime dignissimos fuga, ullam atque dolorum veniam velit explicabo, repellendus laudantium odit eligendi est modi quo voluptatem blanditiis aut. Veniam tempora, quis omnis sunt eligendi exercitationem aspernatur debitis numquam ad labore libero praesentium id dolorum beatae, eveniet architecto molestias ducimus. Rem, quas iure.</div>
                    </div> 
                </div>
            </div>
        </div>
        <div ref={ref2} id='OrderNow'>
            <div className='bg-white bg-opacity-90 text-black pt-4 content-center grid justify-items-center'>

                <div>
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
                        <CreateForm model='Cybertruck'/>
                    </Box>
                </Modal>
                </div>
                
            </div>
        </div>
        

        <div style={{height: '155rem'}} />
        <div ref={ref3}>TODO: Add vehicle spefications</div>
        <div style={{height: '155rem'}} />
    </div>
    )
}

export default Cybertruck