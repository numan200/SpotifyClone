import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const AppInstall = () => {
  return (
    <>
    <Navbar />
    <div className="flex item  justify-center mt-10 gap-4">
      <div >
        <p className='my-4 text-3xl  font-bold'>Windows Spotify</p>
        <Link to={"https://www.spotify.com/us/download/windows/"} >
        <p className=" bg-green-600 hover:bg-green-500 text-black text-[17px] font-bold px-3 py-2 rounded-2xl cursor-pointer text-center underline md:block">
          Download Here
        </p>
        </Link >
        <p className='my-4 text-3xl  font-bold'>Mobile Spotify</p>
        <Link to={"https://www.spotify.com/us/download/android/"} >
        <p className=" bg-green-600 hover:bg-green-500 text-black text-[17px] font-bold px-3 py-2 rounded-2xl  cursor-pointer text-center underline md:block ">
          Download Here
        </p>
        </Link >
        {/* <p className=" bg-green-600 hover:bg-green-500 text-black text-[17px] font-bold px-3 py-2 rounded-2xl hidden cursor-pointer text-center underline md:block">
          Download Here
        </p> */}
      </div>  
    </div>
     </>
  )
}

export default AppInstall
