import React, { useEffect, useRef } from 'react'


const ChatBody = ({message}) => {
 const scrollDownRef = useRef(null)
 useEffect(()=>{
  scrollDownRef?.current.scrollIntoView({behavior : "smooth"})
 },[message])
  const aiResponseStyle = " bg-slate-200  self-start break-words text-primary"
  const humanResponseStyle = " border-slate-200 self-end break-words text-white"
  return (
    <div className='flex flex-col gap-6 mx-4 md:mx-0 font-roboto'>

    {/* user inputs */}
    {
      message.map((msg,idx)=>{
        return(
          <div key={idx} className={`border-2 py-4 px-3 my-1 mx-1 rounded-xl
          ${
            msg?.sender === 'gpt' && aiResponseStyle || humanResponseStyle
          }
          `}>
        <pre className='whitespace-pre-wrap'>
            <span>{msg.message}</span>
        </pre>
    </div>
        )
      })
    }
    {/* {
      message.sender=== "gpt" &&
      message.map((msg,idx)=>{
        return(
          <div key={idx} className={`border-2 py-4 px-3 my-1 bg-slate-200 rounded-xl self-start break-words text-primary`}>
        <pre className='whitespace-pre-wrap'>
            <span>{msg}</span>
        </pre>
    </div>
        )
      })
    } */}
    <div className="h-3" ref={scrollDownRef}></div>
    </div>
  )
}

export default ChatBody