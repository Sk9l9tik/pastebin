import { Link } from 'react-router-dom';
import { useState } from 'react';

import {Dropdown} from './Dropdown'

import birdLogo from '/bird_logo.svg'

interface Option {
  name: string;
  value: number;
}

export function Home() {
  const LIFE_TIMES  = [
    { name: 'Option 1', value: 1 },
    { name: 'Option 2', value: 2 },
    { name: 'Option 3', value: 3 },
    { name: 'Other', value: -1 } // Для кастомного поля нужен value == Other
  ];

  const ACCESS  = [
    { name: 'Public', value: 0 },
    { name: 'Private', value: 1 }
  ];

  const btn_text = "Share a masterpiece >";

  const [pasteContent, setPasteContent] = useState(''); // Для textarea
  const [title, setTitle] = useState(''); // Для input
  const [lifetime, setLifetime] = useState<Option | null>(null); // Для первого списка 
  const [type, setType] = useState<Option | null>(null); // Для второго списка

  // Обработчик для кнопки Send
  const handleSend = () => { 
    console.log({
      'title': title,
      'content': pasteContent,
      'time': lifetime,
      'access': type?.name == 'Private' ? true : false
    })
  };

  return (
    <div className='body'>
      <header className='header bg-[#383838] h-20'>
        <div className="flex justify-between ml-65 mr-65 pt-5.5">
          <Link to="/" className='flex justify-between items-center'>
            <img className="logo mr-2.5" src={birdLogo} alt='Pastebin logo' />
            <p className="text-2xl">PasteBin</p>
          </Link>
          <Link to="/about" className="text-[18px] hover:text-blue-300 pt-1">About</Link>
        </div>
      </header>
      <div className='ml-65 mr-65'>
        <div className="NewPaste pt-10">
          <p className="font-medium text-2xl mb-3">New Paste</p>
          <textarea
            className={"pt-7 pb-7 pl-6 pr-6 w-full min-h-60 bg-[#1F1F1F] outline-none border-[#2E2E2E] border rounded-sm overflow-hidden resize-none field-sizing-content"}
            placeholder="Share a secret with the world ..."
            value={pasteContent}
            onChange={(e) => setPasteContent(e.target.value)}
          />
        </div>
        <div className='PasteSettings'>
          <p className='text-3xl font-bold pt-10.5'>Settings:</p>
          <div className='flex justify-between items-center w-100 h-12 mt-2'>
            <p className='text-2xl'>Title:</p>
            <input
              className='bg-[#D9D9D9] w-64 h-10 outline-none text-gray-900 pl-3 pr-3 border rounded-sm'
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className='flex justify-between items-center w-100 h-12 mt-2'>
            <p className='text-2xl'>Life time:</p>
            <Dropdown
              hasCustomInput
              options={LIFE_TIMES}
              selectedValue={lifetime}
              onSelect={setLifetime}
            />
          </div>
          <div className='flex justify-between items-center w-100 h-12 mt-2'>
            <p className='text-2xl'>Type:</p>
            <Dropdown
              hasCustomInput
              options={ACCESS}
              selectedValue={type}
              onSelect={setType}
            />
          </div>
        </div>
        <button
          onClick={handleSend}
          className="Send w-64 h-12.5 bg-[#EDA200] mt-10 mb-10 rounded-sm text-black text-xl transform-view duration-300 ease-in-out hover:scale-101"
          type="submit">{btn_text}</button>
      </div>
      <footer className="copyright fixed inset-x-0 bottom-0 pb-1">
        <p className="text-[12px] text-[#6161615e] text-center pb-0 select-none">© 2025 PasteIt, Inc All rights reserved.</p>
      </footer>
    </div>
  );
}