import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import birdLogo from '/bird_logo.svg'


export function Paste() {
  const { id } = useParams();
  return (
    <>
      <header className='header bg-[#383838] h-20 mb-25'>
        <div className="flex justify-between ml-65 mr-65 pt-5.5">
          <Link to="/" className='flex justify-between items-center'>
            <img className="logo mr-2.5" src={birdLogo} alt='Pastebin logo' />
            <p className="font-[IBM_Plex_Mono] font-medium text-[24px]">PasteBin</p>
          </Link>
          <Link to="/about" className="font-[Manjari] font-normal text-[18px] hover:text-blue-300 pt-1">ABOUT</Link>
        </div>
      </header>
      <div className='paste ml-65 mr-65'>
        <div className='details pb-8 flex justify-start w-full'>
          {/*TODO: add avatars*/}
          <div className='avatar w-18 h-18 bg-gray-400' /> 

          <div className='author w-full h-18'>
            <p className='title text-white font-[IBM_Plex_Mono] font-medium text-2xl ml-3 h-8'>Untitled</p>
            <div className='info flex justify-start'>
              <p className='user pt-4 font-[IBM_Plex_Mono] font-light text-[20px] ml-3 w-fit h-9'>{/*icon +*/}Naruto</p>
              <p className='views pt-4 font-[IBM_Plex_Mono] font-light text-[20px] pl-12 w-fit h-9'>Views:{/*element*/155}</p>{/*"views" -> icon*/}
              <p className='date pt-4 font-[IBM_Plex_Mono] font-light text-[20px] pl-12 w-fit h-9'>Date:{/*element*/'06-03-25'}</p>
              <p className='burn pt-4 font-[IBM_Plex_Mono] font-light text-[20px] pl-12 w-fit h-9'>Burn:1 minuete{/*element '1 minute'*/}</p>
            </div>
          </div>
        </div>
        
        <div className="">
          <div className="font-[IBM_Plex_Mono] font-normal pt-7 pb-7 pl-6 pr-6 w-full min-h-fit bg-[#1F1F1F] outline-none border-[#2E2E2E] border rounded-sm overflow-hidden resize-none field-sizing-content">
            <p>Paste ID: {id}</p>
            <p>САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! САСКЕ ВЕРНИСЬ В КАНОХУ!!! </p>
          </div>
        </div>
      </div>
    </>
  );
}