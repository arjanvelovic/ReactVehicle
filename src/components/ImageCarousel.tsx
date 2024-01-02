import { Swiper, SwiperSlide } from 'swiper/react';
import screen from '../assets/images/screen.jpg'
import speakers from '../assets/images/speakers.jpg'
import sunroof from '../assets/images/sunroof.jpg'
import SpaciousInterior from '../assets/images/SpaciousInterior.jpg'
import heating from '../assets/images/heating.jpg'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


interface Props {
    carouselInfo: any
}

function ImageCarousel(props: Props) {
    const carouselInfo = props.carouselInfo
    console.log(carouselInfo);

    {carouselInfo.map((slideinfo:any) => (
        console.log( Object.values(slideinfo['image']))
        
        ))}
    
    return (
        <>
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            {carouselInfo.map((slideinfo:any) => (
            <SwiperSlide>
                <article className='article'>
                    <img className='image' src={Object.values(slideinfo['image'])} alt="background" />
                    <div className='header carouselmargin md:marginlarge text-center text-white'>
                        <div id='SubtitleText'>
                            {slideinfo['title']}
                        </div>
                        <div id='ParagraphText'>
                            {slideinfo['text']}
                        </div>
                    </div>
                </article>
            </SwiperSlide>
            ))}
        </Swiper>
        </>
    )
}

export default ImageCarousel