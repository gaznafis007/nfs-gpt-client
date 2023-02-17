import React from 'react'


const ChatBody = () => {
  return (
    <div className='flex flex-col gap-6 mx-4 md:mx-0 font-roboto'>

    {/* user inputs */}
    <div className='border-2 py-4 px-3 my-1 border-slate-200 rounded-xl self-end break-words text-white'>
        <pre className='whitespace-pre-wrap'>
            <span>Hello gpt</span>
        </pre>
    </div>
    <div className={`border-2 py-4 px-3 my-1 bg-slate-200 rounded-xl self-start break-words text-primary`}>
        <pre className='whitespace-pre-wrap'>
            <span>Hello user</span>
        </pre>
    </div>

    </div>
  )
}

export default ChatBody