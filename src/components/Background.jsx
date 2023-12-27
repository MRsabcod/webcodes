import React from 'react'

function Background() {
  return (
   <>
   <div className=' fixed z-[2] w-full h-screen'>

   <div className=' absolute top-[5%] text-zinc-500 w-full flex justify-center py-7 text-xl'>Documents</div>
     <h1 className=' text-zinc-900 font-extrabold text-[14vw] absolute -translate-x-[50%] -translate-y-[50%] top-1/2 left-1/2 leading-none tracking-tighter capitalize'>docs</h1>
   </div>
  
   </>
  )
}

export default Background
