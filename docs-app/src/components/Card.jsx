import React from 'react'
import { SiGoogledocs } from "react-icons/si";
import { FaDownload } from "react-icons/fa6";
import { RiEyeCloseLine } from "react-icons/ri";
import { motion } from "framer-motion";

const Card = ({data, reference}) => {
  return (
        <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.2} dragTransition={ {bouncStiffness: 100, bounceDamping: 10}}
         className='relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-900/50 text-zinc-200 px-8 py-10 overflow-hidden'>
            <SiGoogledocs />
            <p className='text-sm comfortaa tracking-tight leading-tight mt-5 font-semibold'>{data.desc}</p>
            <div className="card-footer absolute bottom-0 w-full left-0">
              <div className='flex items-center justify-between py-3 px-8 mb-2 text-zinc-400'>
                <h5 className='hover:text-zinc-200'>{data.fileSize}</h5>
                {data.close ? <RiEyeCloseLine size=".9em" className='hover:text-zinc-200'/> : <FaDownload size=".8em" className='hover:text-zinc-200'/>}
              </div>
              { data.tag.isOpen && (<div className={`tag w-full py-4 flex items-center justify-center ${data.tag.tagColor === "blue" ? "bg-blue-500" : "bg-green-500"}`}>
                <h3 className="text-sm font-semibold comfortaa">{data.tag.tagTitle}</h3>
              </div>)}
            </div>
        </motion.div>
  )
}

export default Card