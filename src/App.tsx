import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import SideBar from "./components/SideBar";
import Character from "./pages/Character";
import Skills from './pages/Skills';
import Quests from './pages/Quests';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  const [layout, setLayout] = useState<"vertical" | "horizontal" | "verticalWithText">("vertical");

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;
      if (width < 500) {
        setLayout("horizontal");
      } else if (width >= 1000) {
        setLayout("verticalWithText");
      } else {
        setLayout("vertical");
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  return (
    <BrowserRouter>
      <div
        style={{
          ...styles.container,
          flexDirection: layout === "horizontal" ? "column" : "row", // Ajuste la direction selon le layout
        }}
      >
        <SideBar layout={layout} />
        <main style={styles.mainContent}>
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
  );
}

const styles = {
  container: {
    display: "flex",
    height: "100dvh",
    overflow: "hidden", // Empêche le scroll global
  },
  mainContent: {
    flex: 1, // Prend tout l'espace restant
    overflowY: "auto" as const, // Ajoute un scroll uniquement au contenu principal
    padding: "20px",
  },
};

export default App;
