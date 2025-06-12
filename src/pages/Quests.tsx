const Quests = () => (
  <section style={styles.section}>
      <h2 style={styles.title}>Quêtes en cours</h2>
      <ul>
        <li>
          <strong>🎲 Aventure (Projet perso)</strong><br />
          Création d'un jeu de quêtes textuelles avec géolocalisation en temps réel (Mapbox) en React-Native + API Node.
        </li>
        <li>
          <strong>🎨 Portfolio Créatif (Projet perso)</strong><br />
          Site personnel en React.
        </li>
      </ul>
      <h2 style={styles.title}>Quêtes Accomplies</h2>
      <ul>
        <li>
          <strong>📥 Batchs d'intégrations de données (Projet Total Energies)</strong><br />
          Création de batchs d'intégrations de données via SQL Server et Entity Framework.
        </li>
        <li>
          <strong>📈 Ecran ETRM (Projet Total Energies)</strong><br />
          Création et mise à jour d'écrans du logiciel de trading de Total Energies (C#/.Net/Entity Framework/SQL/WinForm).
        </li>
        <li>
          <strong>🎛️ App web de gestion de serveur (Projet Canal+)</strong><br />
          Création d'une app web de gestion et surveillance des serveurs Canal+ (Python/Javascript).
        </li>
        <li>
          <strong>🔍 Daemon de surveillance (Projet Ugloo)</strong><br />
          Dévelopement en python from scratch d'un daemon de surveillance de la solution Ugloo.
        </li>
      </ul>
  </section>
);
  
const styles = {
  section: { padding: "20px", fontFamily: "serif" },
  title: { fontSize: "24px", marginBottom: "10px", color: "#ff845e" },
};
  
export default Quests;
  