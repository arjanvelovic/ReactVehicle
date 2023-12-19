import { Link } from 'react-router-dom'
import model3 from '../assets/images/Model3.jpg'
import models from '../assets/images/ModelS.jpg'
import modely from '../assets/images/ModelY2.jpg'
import modelx from '../assets/images/Modelx.jpg'
import cybertruck from '../assets/images/cybertruck.jpg'

function Vehicles() {

return (
  <div>
    <div className='mb-12'>
      <img className="h-auto max-w-full" src={cybertruck} alt="image description"/>
      <div className='flex justify-center'>
        <button className= ' bg-slate-200 rounded border-slate-300 border hover:bg-slate-600 hover:text-gray-200 w-24 py-2'><Link to='/cybertruck'>Cybertruck</Link></button>
      </div>
    </div>
    <div className='my-12'>
      <img className="h-auto max-w-full" src={model3} alt="image description"/>
      <div className='flex justify-center'>
        <button className= ' bg-slate-200 rounded border-slate-300 border hover:bg-slate-600 hover:text-gray-200 w-24 py-2'><Link to='/model3'>Model 3</Link></button>
      </div>
    </div>
    <div className='my-12'>
      <img className="h-auto max-w-full" src={models} alt="image description"/>
      <div className='flex justify-center'>
        <button className= ' bg-slate-200 rounded border-slate-300 border hover:bg-slate-600 hover:text-gray-200 w-24 py-2'>Model S</button>
      </div>
    </div>
    <div className='my-12'>
      <img className="h-auto max-w-full" src={modely} alt="image description"/>
      <div className='flex justify-center'>
        <button className= ' bg-slate-200 rounded border-slate-300 border hover:bg-slate-600 hover:text-gray-200 w-24 py-2'>Model Y</button>
      </div>
    </div>
    <div className='mt-12'>
      <img className="h-auto max-w-full" src={modelx} alt="image description"/>
      <div className='flex justify-center'>
        <button className= ' bg-slate-200 rounded border-slate-300 border hover:bg-slate-600 hover:text-gray-200 w-24 py-2'>Model X</button>
      </div>
    </div>
    
  </div>
  )
}

export default Vehicles