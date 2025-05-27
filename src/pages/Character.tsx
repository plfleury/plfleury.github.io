const Character = () => (
  <section style={styles.section}>
    <h2 style={styles.title}>Fiche de Personnage</h2>
    <ul style={styles.list}>
      <li><strong>Nom :</strong> Paul Fleury</li>
      <li><strong>Race :</strong> Hobbit</li>
      <li><strong>Classe :</strong> Dév Full Stack</li>
      <li><strong>Niveau :</strong> 7</li>
      <li><strong>Alignement :</strong> Pragmatique Curieux</li>
    </ul>
  </section>
);

  
const styles = {
  section: { padding: "20px", fontFamily: "serif" },
  title: { fontSize: "24px", marginBottom: "10px", color: "#e2b714" },
  list: { listStyle: "none", padding: 0 },
};
  
export default Character;