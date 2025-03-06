import { Link } from 'react-router-dom';

import birdLogo from '/bird_logo.svg'

export function Header({onAccount = true}){
    return (
    <div className='header bg-[#383838] h-20'>
        <div className="flex justify-between ml-65 mr-65 pt-5.5">
          <Link to="/" className='flex justify-between items-center'>
            <img className="logo mr-2.5" src={birdLogo} alt='Pastebin logo' />
            <p className="font-[IBM_Plex_Mono] font-medium text-2xl">PasteBin</p>
          </Link>
            <div className='flex justify-start gap-5'>
              <Link to="/about" className="font-[Manjari] font-normal text-[18px] hover:text-blue-300 pt-1 pb-1">ABOUT</Link>
          {onAccount &&
            <div className='flex justify-start gap-5'>
              <Link to="/login" className="font-[Manjari] font-normal text-[18px] pt-1 pb-1 border hover:rounded-sm w-20 text-center">Login</Link>
              <Link to="/singup" className="font-[Manjari] font-normal text-black text-[18px] pt-1 pb-1 border hover:rounded-sm bg-white w-20 text-center">Sing up</Link>
            </div> 
            }
            </div>
        </div>
    </div>
    )
}