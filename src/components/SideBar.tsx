import './SideBar.css'
import { type CSSProperties } from "react";
import { NavLink } from "react-router-dom";
import { User, Sword, Scroll, Mail } from "lucide-react"; // ou toute autre lib d'icônes

const links = [
  { to: "/", icon: <User />, label: "Personnage" },
  { to: "/skills", icon: <Sword />, label: "Compétences" },
  { to: "/quests", icon: <Scroll />, label: "Quêtes" },
  { to: "/contact", icon: <Mail />, label: "Contact" },
];

export default function SideBar({ layout }: { layout: "vertical" | "horizontal" | "verticalWithText" }) {
  return (
    <div
      id="sidebar"
      style={{
        ...styles.sidebar,
        ...(layout === "horizontal" ? styles.horizontalSidebar : {}),
        ...(layout === "verticalWithText" ? styles.verticalWithTextSidebar : {}),
      }}
    >
      <nav
        style={{
          ...styles.nav,
          ...(layout === "horizontal" ? styles.horizontalNav : {}),
        }}
      >
        {links.map(({ to, icon, label }) => (
          <NavLink
            key={to}
            to={to}
            style={({ isActive }) => ({
              ...styles.link,
              ...(isActive ? styles.activeLink : {}),
            })}
          >
            {icon}
            {layout === "verticalWithText" && <span>{label}</span>}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

// 🎨 Styles inline, à adapter ou extraire en CSS module
const styles: { [key: string]: CSSProperties } = {
  sidebar: {
    flexShrink: 0,
    padding: "20px",
    boxShadow: "2px 0 10px rgba(0,0,0,0.5)",
    fontFamily: "'Press Start 2P', sans-serif",
  },
  horizontalSidebar: {
    width: "auto",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "5px 0",
    order: 1, // Place la sidebar en bas dans le flux flex
  },
  verticalWithTextSidebar: {
    width: "200px",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  horizontalNav: {
    flexDirection: "row",
    gap: "0px",
    justifyContent: "space-around",
    alignItems: "center",
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
};
