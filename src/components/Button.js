
import React from "react";

const Button = ({ name }) => {
  return (
    <div>
        <button className="px-3 py-2 m-2 bg-gray-300 rounded-lg hover:bg-black hover:text-white cursor-pointer">{name}</button>
        
    </div>
  )
}

export default Button;