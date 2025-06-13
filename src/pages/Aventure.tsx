

import { useState } from "react";
import "./Aventure.css"; // Pour les styles, voir ci-dessous
import FakeMap from "../assets/fake-map.jpg";
import Avatar from "../assets/avatar.jpg";

export default function Aventure() {
  const [tab, setTab] = useState<"carte" | "perso">("carte");

  return (
    <div className="phone-frame">
      <div className="phone-screen">
        {tab === "carte" ? <CarteScreen /> : <PersoScreen />}
      </div>

      <nav className="tab-bar">
        <TabItem label="Personnage" active={tab === "perso"} onClick={() => setTab("perso")} icon="👤" />
        <TabItem label="Social" icon="📨" badge />
        <TabItem label="Carte" active={tab === "carte"} onClick={() => setTab("carte")} icon="📍" />
        <TabItem label="Quêtes" icon="📜" />
        <TabItem label="Paramètres" icon="⋮" />
      </nav>
    </div>
  );
}

function CarteScreen() {
  return (
    <div className="carte-screen">
{/*       <div className="top-bar">
        <span>Exp :</span>
        <div className="xp-bar">
          <div className="xp-fill" />
        </div>
        <div className="hearts">❤️❤️❤️</div>
      </div> */}
      <img src={FakeMap} alt="Carte" className="map-image" />
    </div>
  );
}

function PersoScreen() {
  return (
    <div className="perso-screen">
      <h2>Personnage</h2>
      <div className="avatar-wrapper">
        <img src={Avatar} alt="Avatar" className="avatar" />
        <button className="edit-avatar">Changer avatar</button>
      </div>
      <div className="info">
        <p><strong>Nom :</strong> <em>Plfleury</em></p>
        <p><strong>Classe :</strong> Chaman</p>
        <p><strong>Vie :</strong> ❤️❤️❤️</p>
        <p><strong>Niveau :</strong> 1</p>
        <p><strong>Expérience :</strong></p>
        <div className="xp-bar">
          <div className="xp-fill" />
        </div>
        <p><strong>Biographie :</strong> A remplir.</p>
      </div>
    </div>
  );
}

interface TabItemProps {
  label: string;
  icon: string;
  active?: boolean;
  onClick?: () => void;
  badge?: boolean;
}

function TabItem({ label, icon, active, onClick, badge }: TabItemProps) {
  return (
    <button className={`tab-item ${active ? "active" : ""}`} onClick={onClick}>
      <span>{icon}</span>
      {badge && <span className="badge">1</span>}
      <div>{label}</div>
    </button>
  );
}
