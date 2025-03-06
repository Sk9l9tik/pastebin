import {Header} from '../custom_components/Header'

export function Notfoutd(){
    return (
        <>
        <Header onAccount={false}/>
        <div className="w-auto min-h-[80vh] flex items-center justify-center">
            <div>
                <p className="tracking-tight font-[IBM_Plex_Mono] text-9xl bg-linear-to-tl from-orange-700 to-amber-500 bg-clip-text text-transparent">404<a className="ml-7 text-white">Error</a></p>
                <p className="w-fit ml-auto mr-auto mt-5">Ooops! Page doesn't exist!</p>
            </div>
        </div>
        </>
        
    )
}