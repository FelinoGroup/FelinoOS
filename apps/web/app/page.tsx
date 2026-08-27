export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#111827",
        color: "#f9fafb",
        fontFamily: "Arial, sans-serif",
        padding: "32px",
      }}
    >
      <h1>Felino OS</h1>
      <h2>Centro Direzionale</h2>

      <p>Workspace attivo: Tropical Retreat</p>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
          marginTop: "32px",
        }}
      >
        <div
          style={{
            background: "#1f2937",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <h3>Decisioni</h3>
          <p>3 da valutare</p>
        </div>

        <div
          style={{
            background: "#1f2937",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <h3>Missioni</h3>
          <p>14 attive</p>
        </div>

        <div
          style={{
            background: "#1f2937",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <h3>Documenti</h3>
          <p>0 caricati</p>
        </div>
      </section>

      <section style={{ marginTop: "40px" }}>
        <h3>Jarvis</h3>
        <p>Cosa vuoi fare?</p>
      </section>
    </main>
  );
}