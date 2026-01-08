
import Sidebar from "./Sidebar";
import {  Outlet } from "react-router-dom";

import MainContainer from "./MainContainer";


const Body = () => {
  return (
    <>
    <div className="grid grid-flow-col">
      <Sidebar />
      <Outlet/>
       
      </div>
    </>     
  );

};


export default Body;