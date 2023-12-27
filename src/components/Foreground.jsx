import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {
    const data=[
        {
        desc:"main div mai add kar",
        filesize:"1mb",
        close:true,
        tag:{isopen:true,tagTitle:"Download Now",tagcolor:"green"}
    },
    {
        desc: "update header styles",
        filesize: "500kb",
        close: false,
        tag: { isopen: false, tagTitle: "Install Update", tagcolor: "blue" }
    },
    {
        desc: "add form validation",
        filesize: "2mb",
        close: true,
        tag: { isopen: true, tagTitle: "Submit Form", tagcolor: "red" }
    }
]
const ref =useRef()
  return (
  <>
      <div ref={ref} className=' bg-gray-600/50 top-0 left-0 w-full fixed z-[3] h-full flex gap-5 flex-wrap'>
      {
        data.map((elem,index)=>(
           
            <Card value={elem} boundary={ref} />
        
        ))
      }
      </div>
  </>
  
  )
}

export default Foreground
