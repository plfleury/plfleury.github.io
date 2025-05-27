const Contact = () => (
  <section style={styles.section}>
    <h2 style={styles.title}>Envoyer un Corbeau</h2>
    <p>📧 Email : <a href="mailto:fleury.paul@laposte.net">fleury.paul@laposte.net</a></p>
    <p>🧭 Localisation : Arcueil, France</p>
    <p> LinkedIn : <a href="https://www.linkedin.com/in/paul-fleury-0481858b" target="_blank">linkedin.com/in/paul-fleury-0481858b</a></p>
    <p> GitHub : <a href="https://github.com/plfleury" target="_blank">github.com/plfleury</a></p>
  </section>
);
  
const styles = {
  section: { padding: "20px", fontFamily: "serif" },
  title: { fontSize: "24px", marginBottom: "10px", color: "#84b1ed" },
};
  
export default Contact;
  