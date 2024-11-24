
import React, { useState } from "react";
import { assets, songsData } from "../assets/assets";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value === "") {
      setSearchResults([]);
    } else {
      const results = songsData.filter(song =>
        song.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setSearchResults(results);
      console.log(results);
      
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${searchQuery}`, { state: { results: searchResults } });
  };

  return (
    <div className="w-[25%] h-full text-white p-2 flex-col gap-1 hidden lg:flex">
      <div onClick={() => navigate('/')} className="p-4 flex cursor-pointer items-center text-lg gap-1 font-bold bg-[#121212]">
        <img className="w-6" src={assets.home_icon} alt="Home Icon" />
        Home
      </div>
      <div className="px-4 flex items-center text-lg  font-bold bg-[#121212]">
        <img className="w-6" src={assets.search_icon} alt="Search Icon" />
      
      <form onSubmit={handleSearchSubmit} className="p-4 bg-[#121212] rounded">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full p-2 bg-[#242424]  text-white rounded"
          placeholder="Search Here . . ."
          />
      </form>
          </div>
      <div className="h-[85%] p-2 bg-[#121212] rounded flex flex-col justify-around">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img className="w-8" src={assets.stack_icon} alt="Stack Icon" />
            <p className="font-bold">Your Library</p>
          </div>
          <div className="flex gap-4 items-center">
            <img className="w-5" src={assets.arrow_icon} alt="Arrow Icon" />
            <img className="w-5" src={assets.plus_icon} alt="Plus Icon" />
          </div>
        </div>
        <div className="bg-[#242424] flex flex-col items-start justify-start font-semibold rounded-xl p-2">
          <h1 className="text-xl">Create your first playlist</h1>
          <p className="p-1 font-thin">It's easy, we'll help you</p>
          <button className="px-4 py-1 text-[15px] bg-white text-black font-bold rounded-full">
            Create playlist
          </button>
        </div>
        <div className="bg-[#242424] mb-24 flex flex-col items-start justify-start font-semibold rounded-xl p-2">
          <h1 className="text-xl">Let's find some podcasts to follow</h1>
          <p className="p-1 font-thin">We'll keep you updated on new episodes</p>
          <button className="px-4 py-1 text-[15px] bg-white text-black font-bold rounded-full">
            Browse podcasts
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

