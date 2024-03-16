import React,{useContext} from 'react'
import { GlobalContext } from "../App";

export const Info = () => {
    const {count,price}=useContext(GlobalContext);

  return (
    <div className=' m-5 flex justify-center items-center'>
        <button className='mr-2 border p-3 rounded-md bg-blue-200'>Count: {count}</button>
        <button className='ml-2 border p-3 rounded-md bg-blue-200'>Price: {price} </button>
    </div>
  )
}
