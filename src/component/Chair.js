import React, { useState,useContext } from "react";
import ConsertChair from "../images/cinema-chair.svg";
import { GlobalContext } from "../App";

export const Chair = ({ chair }) => {
  const [level, setLevel] = useState(0);
  const [popup,setPopup]=useState(false);
  const {count,setCount,price,setPrice}=useContext(GlobalContext);

  const handlerLevel = () => {
    if (level < 3) {
      setLevel(level + 1);
      if(level===2){
        setCount(count+1);
        setPrice(price+chair.price)
      }
    } else  {
      
      alert("قبلا رزرو شده");
    }
  };

  const handlerStyle = () => {
    if (level === 1) {
      return "bg-green-500";
    } else if (level === 2) {
      return "bg-orange-400";
    } else if (level === 3) {
      return "bg-red-500";
    } 
  };


  return (
    <div onMouseEnter={()=>setPopup(true)} onMouseLeave={()=>setPopup(false)}
      onClick={handlerLevel}
      className="m-1 relative text-xs cursor-pointer"
      key={chair.number}
    >
      <span className="absolute text-center left-4 top-1">{chair.number}</span>
      <img
        className={`w-12 rounded-md ${handlerStyle()}`}
        src={ConsertChair}
        alt="Chair" 
      />
       <h4 className={popup?"block absolute border z-10 bg-blue-50 p-1 rounded-md top-9":"hidden"}>{chair.price}</h4>
    </div>
   
  );
};
