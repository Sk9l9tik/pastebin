import { Link } from 'react-router-dom';
import { useState } from 'react';

import { InputWithDropdown } from './Dropdown'

import birdLogo from '/bird_logo.svg'

interface Option {
  name: string;
  value: number;
}

export function Home() {
  const LIFE_TIMES  = [
    { name: '1 minute', value: 60 },
    { name: '10 minute', value: 600 },
    { name: '1 hour', value: 3600 },
    { name: '1 day', value: 86400 },
    { name: '1 week', value: 86400*7 },
    { name: '1 month', value: 86400*30 },
    ];

  const ACCESS  = [
    { name: 'Public', value: 0 },
    { name: 'Private', value: 1 }
  ];

  const BTNTEXT = 'Share a masterpiece';
  const ARROW = '>';

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
            <p className="font-[IBM_Plex_Mono] font-medium text-2xl">PasteBin</p>
          </Link>
          <div className='grid grid-cols-3 gap-5'>
            <Link to="/about" className="font-[Manjari] font-normal text-[18px] hover:text-blue-300 pt-1 pb-1">ABOUT</Link>
            <Link to="/login" className="font-[Manjari] font-normal text-[18px] pt-1 pb-1 border hover:rounded-sm w-20 text-center">Login</Link>
            <Link to="/singup" className="font-[Manjari] font-normal text-black text-[18px] pt-1 pb-1 border hover:rounded-sm bg-white w-20 text-center">Sing up</Link>
          </div>
        </div>
      </header>
      <div className='ml-65 mr-65'>
        <div className="NewPaste pt-10">
          <p className="font-bold text-2xl mb-3 font-[IBM_Plex_Mono]">New Paste</p>
          <textarea
            className={"font-[IBM_Plex_Mono] font-medium pt-7 pb-7 pl-6 pr-6 w-full min-h-90 bg-[#1F1F1F] outline-none border-[#2E2E2E] border rounded-sm overflow-hidden resize-none field-sizing-content"}
            placeholder="Share a secret with the world ..."
            value={pasteContent}
            onChange={(e) => setPasteContent(e.target.value)}
          />
        </div>
        <div className='PasteSettings'>
          <p className='font-[IBM_Plex_Mono] font-semibold text-2xl pt-10.5'>Settings:</p>
          <div className='flex justify-between items-center w-100 h-12 mt-2'>
            <p className='font-[IBM_Plex_Mono] font-medium text-xl'>Title:</p>
            <input
              className='font-[IBM_Plex_Mono] font-medium bg-[#D9D9D9] w-64 h-10 outline-none text-gray-900 pl-3 pr-3 border rounded-sm'
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className='flex justify-between items-center w-136 h-12 mt-2'>
            <p className='font-[IBM_Plex_Mono] font-medium text-xl'>Life time:</p>
            <InputWithDropdown
            options={LIFE_TIMES}
            placeHolder='00:00:00'
            onSelect={setLifetime}/>
          </div>
          <div className='flex justify-between items-center w-136 h-12 mt-2'>
            <p className='font-[IBM_Plex_Mono] font-medium text-xl'>Type:</p>
            <InputWithDropdown
            options={ACCESS}
            placeHolder='Public / Private'
            onSelect={setType}
            isReadOnly={true}/>
          </div>
        </div>
        <button
          onClick={handleSend}
          className="group btn font-[IBM_Plex_Mono] font-semibold Send w-64 h-12.5 bg-[#EDA200] mt-10 mb-10 rounded-sm text-black text-[19px] transform-view duration-300 ease-in-out hover:scale-102"
          type="submit">
          <span className='pl-2 group-hover:pl-0 duration-200 erase-in-out'> {BTNTEXT}</span>
          <span className="invisible group-hover:visible group-hover:ml-2 duration-200 erase-in-out">{ARROW}</span>
          </button>
      </div>
      <footer className="copyright fixed inset-x-0 bottom-0 pb-1">
        <p className="font-[IBM_Plex_Mono] font-light text-[12px] text-[#4e4e4e5e] text-center pb-0 select-none">© 2025 PasteIt, Inc All rights reserved.</p>
      </footer>
    </div>
  );
}