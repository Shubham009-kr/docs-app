import React, { useRef } from 'react'
import Card from './Card'


const Foreground = () => {

    const ref = useRef(null);
    const data = [{
      desc:"Lorem ipsum, Hello hello dolor sit amet consectetur adipisicing elit. Dolor earum nesciunt facere?",
      fileSize: ".9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green"},
    },
    { 
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, maxime!",
      fileSize: ".7mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue"},
    },{ 
      desc:"Lorem ipsum dolor sit amet, consectetur adipisicing.",
      fileSize: ".3mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green"},
    },{
      desc:"Lorem ipsum, Hello hello dolor sit amet consectetur adipisicing daddyy yeahh elit. Dolor earum nesciunt facere?",
      fileSize: "1.1mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green"},
    },
  ];
  return (
    <div>
      <div ref={ref} className='fixed z-[3] w-full h-full top-0 left-0 flex gap-8 flex-wrap p-10'>
        {data.map((item, index) =>(
          <Card data={item} reference={ref} />
        ))}
      </div>
    </div>
  )
}

export default Foreground