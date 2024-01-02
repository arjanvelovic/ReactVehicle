import { useState } from "react"

export default function About() {

  const [isVisible, setIsVisible] = useState(false)
    const dropDown = () => {
        setIsVisible(!isVisible)
    }
    const clicked = () => {
        setIsVisible(false)
    }

  return (
  
    <div>
      <div className="h-24"></div>

      <nav className="grid grid-cols-2  w-full bg-blue-300">
        <button className="h-9 w-20 bg-yellow-300 border-black">Test1</button>
        <button className="h-9 w-20 bg-yellow-300 border-black hidden md:flex">Test2</button>
        <button onClick={dropDown} className="h-9 w-20 bg-yellow-300 border-black md:hidden">Test3</button>
        <div className="col-span-2 text-center z-10 tra">
        { isVisible ? (
        <div className='grid grid-cols-1 text-center'>
            <button className="h-9 w-full bg-yellow-300 border-black">Test1</button>
            <button className="h-9 w-full bg-yellow-300 border-black">Test1</button>
        </div>
        ) : (
        <></>
        ) }
        </div>
      </nav>
    </div>
  )
}
