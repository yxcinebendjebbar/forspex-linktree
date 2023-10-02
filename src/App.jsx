// eslint-disable-next-line no-unused-vars
import React from 'react'


const App = () => {
  return (
    <div className='flex flex-col justify-start items-center bg-slate-800 h-[560px] w-screen rounded-3xl opacity-70 backdrop-blur-2xl
     md:h-[500px] md:w-[600px]
    '>
      <div>
        <img src="/F.png" draggable='false' className=' w-[86px] md:w-[128px]'/>
        <img src="/Fdot.png" draggable='false' className=' w-[86px] m-[-64px] ml-3.5 animate-pulse md:w-[128px] md:m-[-96px] md:ml-5 '/>
      </div>
      <h1 className=' text-gray-100 text-2xl font-oxan font-medium mt-10 md:text-4xl md:font-medium md:font-oxan md:mt-16'>FORSPEX</h1>
      <p className='text-gray-600 text-2xl font-oxan font-medium'>ENTERTAINENT</p>

      <div className='linktree mt-8 flex flex-row flex-wrap justify-center items-center gap-4 md:gap-4 max-h-60'>
        <a href='https://web.facebook.com/forspex.official' className='facebook flex justify-center items-center gap-2 bg-slate-600 hover:bg-slate-400 transition-all p-4 
        pt-2 pb-2 rounded-3xl text-white hover:text-gray-700'>
          <img src="/icons8-facebook.svg"  />
          <p className=' text-lg'>Our Facebook Page</p>
        </a>
        <a href='https://twitter.com/forspex' className='twitter flex justify-center items-center gap-2 bg-slate-600 hover:bg-slate-400 transition-all p-4 
        pt-2 pb-2 rounded-3xl text-white hover:text-gray-700'>
          <img src="/icons8-twitter.svg"  />
          <p className=' text-lg'>Our Twitter Page (X)</p>
        </a>
        <a href='https://www.linkedin.com/company/forspex' className='linkedin flex justify-center items-center gap-2 bg-slate-600 hover:bg-slate-400 transition-all p-4 
        pt-2 pb-2 rounded-3xl text-white hover:text-gray-700'>
          <img src="/icons8-linkedin.svg"  />
          <p className=' text-lg'>Our Linkedin Page</p>
        </a>
        <a href='https://forspex.com/' className='forspexSite flex justify-center items-center gap-2 bg-slate-600 hover:bg-slate-400 transition-all p-4 
        pt-2 pb-2 rounded-3xl text-white hover:text-gray-700'>
          <img src="/icons8-external-link.svg"  />
          <p className=' text-lg'>Our Site</p>
        </a>
      </div>
      <a href="https://discord.gg/kRYcfs3Gng" className=' mt-20 md:mt-10'>
        <img src="/icons8-discord.svg"/>
      </a>
    </div>
  )
}

export default App 