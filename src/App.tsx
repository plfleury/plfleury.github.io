import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Character from "./pages/Character";
import Skills from './pages/Skills';
import Quests from './pages/Quests';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {

  return (
    <BrowserRouter>
      <SideBar />
      <div>
        <main>
          <Routes>
            <Route path="/" element={<Character />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/quests" element={<Quests />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
