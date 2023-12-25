import React from 'react';
import {AiOutlineClose} from 'react-icons/ai';
import { FaCircleDot } from "react-icons/fa6";


export default function Lists() {
  return (
    <div className='listsContainer'>
        <div className='firstsec'>
            {/* <p>lists</p> */}
            <p className='clearAll'>clear all</p>
        </div>
      <div className='lists'>
        <ul>
            <li className='listItem'> <FaCircleDot className='dot'/> reading for 20 minutes <AiOutlineClose className='listCloseIcon'/></li>
            <li className='listItem'><FaCircleDot className='dot'/>reading for 20 minutes <AiOutlineClose className='listCloseIcon'/></li>
            <li className='listItem'><FaCircleDot className='dot'/>reading for 20 minutes <AiOutlineClose className='listCloseIcon'/></li>
            <li className='listItem'><FaCircleDot className='dot'/>reading for 20 minutes <AiOutlineClose  className='listCloseIcon'/></li>
        </ul>
        </div>
    </div>
  )
}
