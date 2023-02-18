import React, { useState } from 'react'
import {FiSend} from "react-icons/fi"
import {BsThreeDots} from "react-icons/bs"

const ChatInput = ({sendMessage, loading}) => {
  const [value,setValue] = useState('')

  if(loading){
    return <div className='w-full block p-4 h-2'><BsThreeDots className='text-4xl mx-auto
    animate-bounce animate-pulse text-white text-center'/></div>
  }
  
  const handleSubmit = ()=>{
    if(value == "")return;
    sendMessage({sender: "human", message: value})
    setValue("")
    
  }
  return (
    <div className='mx-4 md:mx-0'>
        <div className='w-full flex bg-slate-200/10 px-3 py-4 rounded-lg gap-2 overflow-auto items-center justify-between'>
            <textarea
            onKeyDown={(e)=>{
              e.keyCode===13 && e.shiftKey === false && handleSubmit()
            }}
             type="text" value={value} onChange={(event)=>setValue(event.target.value)} className='bg-transparent text-white px-3 py-2 w-full border-0 outline-none' />
            <span onClick={handleSubmit} className='cursor-pointer hover:scale-110'><FiSend className='text-white text-xl'/></span>
        </div>
    </div>
  )
}

export default ChatInput