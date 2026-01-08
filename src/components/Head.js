import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { useState, useEffect } from 'react';
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const dispatch = useDispatch(); 
    const searchCache = useSelector(store => store.search);  

    useEffect(() => {
    const timer = setTimeout(() => {

      if (searchCache[searchQuery]) {

        setSuggestions(searchCache[searchQuery]);

      } 
       else
     {
        getSearchSuggestions();
      }

    }, 200);

    return () => {

      clearTimeout(timer);

    };

  }, [searchQuery]);

    const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    //console.log(json[1]);
    setSuggestions(json[1]);

    // update cache
    dispatch(

      cacheResults({

        [searchQuery]: json[1],

      })
    );
  };
    

    const toggleMenuHandler = () => {

        dispatch(toggleMenu());

    }

  return (

    <div className="flex justify-between p-4 shadow-md">

        <div className="flex gap-4 items-center">

            <img onClick={()=> toggleMenuHandler()}
            
            className="h-8 cursor-pointer" src = "https://cdn-icons-png.flaticon.com/128/9663/9663120.png"    alt="Menu Icon"/>

            <a href="/">  

            <img className="h-12 mx-2" src="https://logos-world.net/wp-content/uploads/2020/06/YouTube-Logo.png"     alt="YouTube Logo" />
           
            </a>
            </div>

            <div className='col-span-15 px-10'>
            <div>
            <input className="max-w-[600px] flex-1 border border-gray-400 px-4 py-2 rounded-l-full focus:outline-none" type="text"
            
            value={searchQuery} 
            
            onChange={(e)=> setSearchQuery(e.target.value)} 
            onFocus={()=> setShowSuggestions(true)}
            onBlur={()=> setShowSuggestions(false)}

            />

            <button className='border border-gray-400 px-4 py-2 rounded-r-full'>🔍︎</button>
            </div>
            {showSuggestions && (
          <div className="fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
            </div>

            <div className="col-span-1">

            <img className="h-8 w-8 rounded-full cursor-pointer" 

            src="https://static.vecteezy.com/system/resources/thumbnails/007/407/996/small/user-icon-person-icon-client-symbol-login-head-sign-icon-design-vector.jpg"
            
            alt="User Icon"/>

            </div>
    </div>
  )
}

export default Head;