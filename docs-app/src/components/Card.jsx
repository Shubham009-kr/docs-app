import React from 'react'
import { SiGoogledocs } from "react-icons/si";
import { FaDownload } from "react-icons/fa6";

const Card = () => {
  return (
        <div className='relative w-60 h-72 rounded-[40px] bg-zinc-900/50 text-zinc-200 px-8 py-10 overflow-hidden'>
            <SiGoogledocs />
            <p className='text-sm comfortaa tracking-tight leading-tight mt-5 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet architecto alias quod?</p>
            <div className="card-footer absolute bottom-0 w-full left-0">
              <div className='flex items-center justify-between py-3 px-8 mb-2 text-zinc-400'>
                <h5 className='hover:text-zinc-200'>.4mb</h5>
                <FaDownload size=".8em" className='hover:text-zinc-200'/>
              </div>
              <div className="tag w-full py-4 flex items-center justify-center bg-green-400">
                <h3 className="text-sm font-semibold comfortaa">Download</h3>
              </div>
            </div>
        </div>
  )
}

export default Card