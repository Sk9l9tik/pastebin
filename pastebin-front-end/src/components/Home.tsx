import { Link } from 'react-router-dom';

//import Dropdown from 'react-dropdown';
//import 'react-dropdown/style.css';

import birdLogo from '/bird_logo.svg'



export function Home() {

  const btn_text = "Share a masterpiece >";

  return (
    <body>
      <header className='header bg-[#383838] h-20'>
        <div className="flex justify-between ml-65 mr-65 pt-5.5">
          <Link to="/" className='flex justify-between items-center'>
            <img className="logo mr-2.5" src={birdLogo} alt='Pastebin logo'/>
            <p className="text-2xl">PasteBin</p>
          </Link>
          <Link to="/about" className="text-[18px] hover:text-blue-300 pt-1.5">About</Link>
        </div>
      </header>
      <div className='ml-65 mr-65'>
          <div className="NewPaste  pt-10">
            <p className="font-medium text-2xl mb-3 ">New Paste</p>
            <textarea
            className={"pt-7 pb-7 pl-6 pr-6 w-full min-h-60 bg-[#1F1F1F] outline-none border-[#2E2E2E] border rounded-sm overflow-hidden resize-none field-sizing-content"}
            placeholder="Share a secret with the world ..."/>
          </div>
          <div className='PasteSettings'>
            <p className='text-3xl font-bold pt-10.5'>Settings:</p>
            <div className='flex justify-between items-center w-100 h-12 mt-2'>
              <p className='text-2xl'>Title:</p>
              <input className='bg-[#D9D9D9] w-64 h-10 outline-none text-gray-900 pl-3 pr-3 border rounded-sm'
              placeholder="Title"/>
            </div>
            <div className='flex justify-between items-center w-100 h-12 mt-2'>
              <p className='text-2xl'>Life time:</p>
              <input className='bg-[#D9D9D9] w-64 h-10 outline-none text-gray-900 pl-3 pr-3 border rounded-sm'
              placeholder="field select"/>
            </div>
            <div className='flex justify-between items-center w-100 h-12 mt-2'>
              <p className='text-2xl'>Type:</p>
              <input className='bg-[#D9D9D9] w-64 h-10 outline-none text-gray-900 pl-3 pr-3 border rounded-sm'
              placeholder="Private / Public"/>
            </div>
          </div>
          <button className="w-64 h-12.5 bg-[#EDA200] mt-10 mb-10 rounded-sm text-black text-xl transform-view duration-300 ease-in-out hover:scale-101" type="submit">{btn_text}</button>
        </div>
        <footer className="copyright fixed inset-x-0 bottom-0 pb-1 ">
            <p className="text-[12px] text-[#6161615e] text-center pb-0 select-none">© 2025 PasteIt, Inc All rights reserved.</p>
        </footer>
    </body> 
  )
}