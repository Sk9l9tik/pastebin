import { useParams } from 'react-router-dom';

import {Header} from '../custom_components/Header'


export function Paste() {
  const { id } = useParams();
  return (
    <>
      {/* TODO: make Adaptive */}
      <Header className='mx-50 max-lg:mx-30 max-md:mx-15 max-xl:40 max-sm:mx-10'/>
      <div className='paste mt-15 mx-50 max-lg:mx-30 max-md:mx-15 max-xl:40 max-sm:mx-10'>
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