

import { QueryClient, QueryClientProvider, useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import './App.css'
import ChatBody from './components/Body/ChatBody'
import ChatInput from './components/Input/ChatInput'



function App() {
  const [message,setMessage] = useState([])
  // const [aiMessage, setAiMessage] = useState([])
  const mutation = useMutation({
    mutationFn: ()=>fetchMessage(message),
    onSuccess: (data)=>{
      console.log(data);
      setMessage((prev)=>[...prev,{sender: "gpt", message:data?.message.replace(/^\n\n/, "")}])
    },
    onError: (error)=>console.log("error:", error)
  })
  const sendMessage = async(msg)=>{
    await Promise.resolve(setMessage((prev)=>[...prev, msg]))
    mutation.mutate()
  }
  const fetchMessage = async(chats)=>{
    try{
      const res = await fetch("https://nfs-gpt-server.vercel.app/message",{
        method: 'POST',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          message: chats.map(chat=>chat.message).join("\n")
        })
      })
      const data = res.json()
      return data
    }
    catch (error){
      console.log(error)
    }
  }
  return (
    <>
      <div className='bg-primary h-screen py-8 sm:px-16 flex flex-col justify-between align-middle overflow-hidden relative'>
        <div className='absolute top-0 w-52 h-56 bg-gradient-to-r from-indigo-800 to-blue-400 blur-[120px] z-0'></div>
        <div className='absolute right-2 top-2 w-64 h-72 bg-gradient-to-l from-purple-800 to-green-600 blur-[120px] z-0'></div>
        <header>
          <h2 className="text-4xl sm:text-2xl md:text-3xl font-semibold text-center py-6 text-white">nfs.GPT</h2>
        </header>
        <section className='h-[90%] overflow-auto max-w-7xl self-center w-full scrollbar-thumb-slate-400 scrollbar-track-gray-transparent scrollbar-thumb-thin scrollbar-none'>
          <ChatBody message={message}></ChatBody>
        </section>
        <section className='w-full my-2 max-w-7xl self-center'>
          <ChatInput sendMessage={sendMessage} loading={mutation.isLoading}></ChatInput>
        </section>
      </div>
    </>
  )
}

export default App
