import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './Home.tsx'
import { About } from './About.tsx'
import { Paste } from './Paste.tsx'
import { Notfoutd } from './NotFound.tsx';


export function App() {
    return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/paste/:id" element={<Paste />} />
        <Route path="*" element={<Notfoutd />}/>
      </Routes>
    </Router>
    )
}