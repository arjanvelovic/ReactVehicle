import Background from '../assets/images/HomeImage.jpg'
import TeslaVideo from '../assets/images/TeslaVideo.mp4'

function Home() {
  return (
    <>
    <video id='HomeVideo' muted autoPlay loop>
      <source src={TeslaVideo} type="video/mp4" ></source>
    </video>
    
    </>
  
  )
}

export default Home