import React from 'react';

const Head = () => {
  return (
    <div className="flex justify-between p-4 shadow-md">

        <div className="flex gap-4 items-center">

            <img className="h-8" src = "https://cdn-icons-png.flaticon.com/128/9663/9663120.png"    alt="Menu Icon"/>

            <img className="h-12 mx-2" src="https://logos-world.net/wp-content/uploads/2020/06/YouTube-Logo.png"     alt="YouTube Logo" />
           
            </div>

            <div className='col-span-15 px-10'>

            <input className="max-w-[600px] flex-1 border border-gray-400 px-4 py-2 rounded-l-full focus:outline-none" type="text" />

            <button className='border border-gray-400 px-4 py-2 rounded-r-full'>🔍︎</button>

            </div>

            <div className="col-span-1">

            <img className="h-8 w-8 rounded-full" 

            src="https://static.vecteezy.com/system/resources/thumbnails/007/407/996/small/user-icon-person-icon-client-symbol-login-head-sign-icon-design-vector.jpg"
            
            alt="User Icon"/>

            </div>
    </div>
  )
}

export default Head;