import React from 'react'
import {FiSend} from "react-icons/fi"
import {BsThreeDots} from "react-icons/bs"

const ChatInput = () => {
  return (
    <div className='mx-4 md:mx-0'>
        <div className='w-full flex bg-slate-200/10 px-3 py-4 rounded-lg gap-2 overflow-auto items-center justify-between'>
            <input type="text" className='bg-transparent px-3 py-2 w-full border-0 outline-none' />
            <span className='cursor-pointer hover:scale-110'><FiSend className='text-white text-xl'/></span>
        </div>
    </div>
  )
}

export default ChatInput