import { Link } from 'react-router-dom';

import birdLogo from '/bird_logo.svg'
import { twMerge } from 'tailwind-merge';

export function Header({onAccount = false, className = ''}){
    return (
    <div className='bg-[#383838] h-20 w-full'>
        <div className={twMerge("flex justify-between mx-60 pt-5.5", className)}>
          <Link to="/" className='flex justify-between items-center'>
            <img className="logo mr-2.5 max-sm:size-10" src={birdLogo} alt='Pastebin logo' />
            <p className="font-[IBM_Plex_Mono] font-medium max-md:text-2xl text-xl max-sm:text-[18px] max-sm:hidden block">PasteBin</p>
          </Link>
          <div className='flex justify-start gap-5'>
            <Link to="/about" className="font-[Manjari] font-normal text-[18px] max-md:text-[15px] pt-1.5 max-md:pt-2 hover:text-blue-300 sm:block hidden">ABOUT</Link>
          {!onAccount &&
            <div className='flex justify-start gap-5'>
              <Link to="/login" className="font-[Manjari] font-normal text-[18px] pt-1 pb-1 border hover:rounded-sm w-20 text-center">Sign in</Link>
              <Link to="/signup" className="font-[Manjari] font-normal text-black text-[18px] pt-1 pb-1 border hover:rounded-sm bg-white w-20 text-center md:block hidden">Sign up</Link>
            </div>}
          </div>
        </div>
    </div>
    )
}