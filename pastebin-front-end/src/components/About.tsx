import { Link } from 'react-router-dom';

import birdLogo from '/bird_logo.svg'

export function About() {
    return (
        <body>
        <header className='header bg-[#383838] h-20'>
          <div className="flex justify-between ml-65 mr-65 pt-5.5">
            <Link to="/" className='flex justify-between'>
              <img className="logo mr-2.5" src={birdLogo} alt='Pastebin logo'/>
              <p className="font-[IBM_Plex_Mono] font-medium text-[24px]">PasteBin </p>
            </Link>
          </div>
        </header>
        <div className='ml-65 mr-65'>
            <div className="AboutPastebin  pt-10">
                <p className="font-[IBM_Plex_Mono] font-bold text-3xl mb-3">About PasteBin:</p>
                <div className={"pt-7 pb-7 pl-6 pr-6 w-full min-h-100 bg-[#1F1F1F] outline-none border-[#2E2E2E] border rounded-sm overflow-hidden resize-none field-sizing-content"}>
                    <div>
                        <p className="font-[IBM_Plex_Mono] font-semibold text-2xl">What is Pastebin all about?</p>
                        <p className="font-[IBM_Plex_Mono] font-light text-[18px] pt-2.5">Pastebin is a website where you can store any text online for easy sharing. The website is mainly used by programmers to store pieces of sources code or configuration information, but anyone is more than welcome to paste any type of text. The idea behind the site is to make it more convenient for people to share large amounts of text online</p>
                    </div>
                    <div className="pt-11">
                        <p className="font-[IBM_Plex_Mono] font-semibold text-2xl">What is My Pastebin?</p>
                        <p className="font-[IBM_Plex_Mono] font-light text-[18px] pt-2.5">When you create an account you get your own Pastebin. This means you can now store pastes and have full control over them at any point in the future. Having your own Pastebin is also great for sharing your pastes with others. Your Pastebin is both public and private at the same time. Your public pastes are visible to everybody while the private ones are only visible to you.</p>
                    </div>
                </div>
            </div>
          </div>
        <footer className="copyright fixed inset-x-0 bottom-0 pb-1.5">
            <p className="font-[IBM_Plex_Mono] font-light text-[12px] text-[#4e4e4e5e] text-center pb-0 select-none">© 2025 PasteIt, Inc All rights reserved.</p>
        </footer>
      </body>
    )
}