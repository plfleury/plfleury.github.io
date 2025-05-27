const Skills = () => (
  <section style={styles.section}>
    <h2 style={styles.title}>Compétences du Héros</h2>

    <h3>Compétences Techniques</h3>
    <ul>
      <li>🗡️ React.js, React-Native, Typescript</li>
      <li>🛡️ Node.js, Express, C#/.Net, Python</li>
      <li>🔮 PostgreSQL, MongoDB</li>
      <li>📜 Git, Jira, Azure Devops, Figma</li>
    </ul>

    <h3>Compétences Non-Techniques</h3>
    <ul>
      <li>🎯 Esprit d'équipe</li>
      <li>⚙️ Curiosité</li>
      <li>🧩 Adaptabilité</li>
      <li>🗣️ Communication claire</li>
    </ul>
  </section>
);
  
const styles = {
  section: { padding: "20px", fontFamily: "serif" },
  title: { fontSize: "24px", marginBottom: "10px", color: "#59c9a5" },
};
  
export default Skills;
  