import React from "react" ; 
import Button from "./Button";

const list = ["All", "Music", "Sports", "Gaming", "Movies", "News", "Learning", "Fashion","AI", "Advancements", "Technology", "Comedy", "Live", "Travel", "Food", "Documentary"];

const ButtonList = () => {
  return (
    <div className="flex scroll-m-3 ">
        
       {list.map((item) => (
           <Button key={item} name={item} />
       ))};

    </div>
  );
};

export default ButtonList;