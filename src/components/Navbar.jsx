import React from "react";
import { assets } from "../assets/assets";
import { useNavigate , Link} from "react-router-dom";


function Navbar() { 

  const navigate = useNavigate();
  return (
    <>
    <div className="w-full flex justify-between items-center font-semibold ">
      <div className="flex item center gap-2">
        <img
          onClick={()=>navigate(-1)}
          className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
          src={assets.arrow_left}
          alt=""
        />
        <img
          onClick={()=>navigate(1)}
          className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
          src={assets.arrow_right}
          alt=""
        />
      </div>
      <div className="flex items-center gap-4">
      <Link to="/Premium">
        <p className=" bg-green-600 hover:bg-green-500 text-black text-[15px] font-bold px-4 py-2 rounded-2xl hidden cursor-pointer md:block">
          Explore Premium
        </p>
        </Link>
          <Link to="/AppInstall">
        <p className="bg-black px-4 py-2 rounded-2xl cursor-pointer">
           App Install
        </p>
        </Link>
        
        <Link
            to="/Signup"
              className="text-white text-center text-[19px] bg-gradient-to-t w-7 from-yellow-500 via-pink-800 to-purple-900 focus:ring-2 flex justify-center items-center uppercase focus:ring-white font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
             a
        </Link>
         
      </div>
    </div>
    <div className="flex item-center gap-4 mt-5">
        <p className="text-white bg-green-600 hover:bg-green-500 px-4 py-1 rounded-2xl cursor-pointer"> All</p>
        <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer"> Music</p>
        <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer"> podcast</p>
    </div>
    </>
  );
}

export default Navbar;