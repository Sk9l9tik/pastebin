import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home.tsx'
import { About } from './pages/About.tsx'
import { Paste } from './pages/Paste.tsx'
import { Login } from './pages/Login.tsx'
import { Signup } from './pages/Signup.tsx'
import { Notfoutd } from './pages/NotFound.tsx';


export function App() {
    return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/paste/:id" element={<Paste />} />
        <Route path="*" element={<Notfoutd />}/>
      </Routes>
    </Router>
    )
}