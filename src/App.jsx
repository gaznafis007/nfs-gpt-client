

import './App.css'
import ChatBody from './components/Body/ChatBody'
import ChatInput from './components/Input/ChatInput'

function App() {
  

  return (
    < >
      <div className='bg-primary h-screen py-8 sm:px-16 flex flex-col justify-between align-middle overflow-hidden relative'>
        <div className='absolute top-0 w-52 h-56 bg-gradient-to-r from-indigo-800 to-blue-400 blur-[120px] z-0'></div>
        <div className='absolute right-2 top-2 w-64 h-72 bg-gradient-to-l from-purple-800 to-green-600 blur-[120px] z-0'></div>
        <header>
          <h2 className="text-4xl sm:text-2xl md:text-3xl font-semibold text-center py-6 text-white">nfs.GPT</h2>
        </header>
        <section className='h-[90%] overflow-auto max-w-4xl self-center w-full'>
          <ChatBody></ChatBody>
        </section>
        <section className='w-full max-w-4xl self-center'>
          <ChatInput></ChatInput>
        </section>
      </div>
    </>
  )
}

export default App
