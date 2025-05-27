import { type CSSProperties } from "react";
import { NavLink } from "react-router-dom";
import { User, Sword, Scroll, Mail } from "lucide-react"; // ou toute autre lib d'icônes

const links = [
  { to: "/plfleury.github.io", icon: <User />, label: "Personnage" },
  { to: "/skills", icon: <Sword />, label: "Compétences" },
  { to: "/quests", icon: <Scroll />, label: "Quêtes" },
  { to: "/contact", icon: <Mail />, label: "Contact" },
];

export default function SideBar() {
  return (
    <aside style={styles.sidebar}>
      <nav style={styles.nav}>
        {links.map(({ to, icon, label }) => (
          <NavLink
            key={to}
            to={to}
            style={({ isActive }) => ({
              ...styles.link,
              ...(isActive ? styles.activeLink : {}),
            })}
          >
            <span style={styles.icon}>{icon}</span>
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

// 🎨 Styles inline, à adapter ou extraire en CSS module
const styles: { [key: string]: CSSProperties } = {
  sidebar: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "200px",
    backgroundColor: "#1c1b29", // sombre, type RPG
    color: "#eee",
    padding: "20px",
    boxShadow: "2px 0 10px rgba(0,0,0,0.5)",
    fontFamily: "'Press Start 2P', sans-serif", // tu peux charger une police pixel via Google Fonts
  },
  nav: {
    display: "flex",
    height: "100%",
    justifyContent: "center",
    flexDirection: "column",
    gap: "20px",
  },
  link: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    textDecoration: "none",
    color: "#ccc",
    fontSize: "14px",
    padding: "10px",
    borderRadius: "5px",
    transition: "background 0.2s",
  },
  activeLink: {
    backgroundColor: "rgba(51, 145, 87, 0.49)",
    color: "rgba(0, 184, 126, 0.99)",
  },
  icon: {
    fontSize: "18px",
  },
};
