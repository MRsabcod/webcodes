import { data } from 'autoprefixer';
import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LiaDownloadSolid } from "react-icons/lia";
import { GrClose } from "react-icons/gr";
import { motion } from "framer-motion"
function Card({value,boundary}) {
    console.log(value)
    return (
        <motion.div drag dragConstraints={boundary} whileDrag={{scale:1.1}}  dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}   className='text-white overflow-hidden px-5 py-10 w-60 h-72 bg-zinc-600 top-[10%] left-[10%] relative rounded-[50px]'>
            <FaRegFileAlt />
            <p className=' leading-tight text-sm  mt-5 font-bold'>{value.desc}</p>
            {/* <div className='bg-white w-full h-10 relative'></div> */}
            <div className='footer absolute bottom-0 left-0 w-full  '>
                <div className='flex items-center justify-between px-8 py-3 mb-3 '>

                    <h5 className=' font-semibold text-md'>{value.filesize}</h5>
                    <span className=' bg-zinc-900 rounded-full w-5 h-5 flex items-center justify-center'>
                     {!value.close?<LiaDownloadSolid size='1em' color='#fff' />:<GrClose size='.6em' color='#fff' />
}

                    </span>

                </div>
                {value.tag.isopen && (
               <div className={`tag w-full py-4   bg-${value.tag.tagcolor}-200  flex items-center justify-center `}>
                <h3 className=' text-sm text-black font-semibold'>{value.tag.tagTitle}</h3>

               </div>)}
            </div>
        </motion.div>

    )
}

export default Card
