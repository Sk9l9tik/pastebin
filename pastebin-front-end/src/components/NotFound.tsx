import { Link } from 'react-router-dom';

import birdLogo from '/bird_logo.svg'

export function Notfoutd(){
    return (
        <>
            <header className='header bg-[#383838] h-20'>
                <div className="flex justify-between ml-65 mr-65 pt-5.5">
                <Link to="/" className='flex justify-between items-center'>
                    <img className="logo mr-2.5" src={birdLogo} alt='Pastebin logo' />
                    <p className="font-[IBM_Plex_Mono] font-medium text-[24px]">PasteBin</p>
                </Link>
                <Link to="/about" className="font-[Manjari] font-normal text-[18px] hover:text-blue-300 pt-1">ABOUT</Link>
                </div>
            </header>
            <div className="w-auto min-h-[80vh] flex items-center justify-center">
                <div>
                    <p className="tracking-tight font-[IBM_Plex_Mono] text-9xl bg-linear-to-tl from-orange-700 to-amber-500 bg-clip-text text-transparent">404<a className="ml-7 text-white">Error</a></p>
                    <p className="w-fit ml-auto mr-auto mt-5">Ooops! Page doesn't exist!</p>
                </div>
            </div>
        </>
        
    )
}