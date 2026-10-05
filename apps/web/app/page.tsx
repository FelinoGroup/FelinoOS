"use client";

import { useState } from "react";

type Decisione = {
  id: number;
  titolo: string;
  cantiere: string;
  priorita: "ALTA" | "MEDIA" | "BASSA";
  stato: "DA VALUTARE" | "APPROVATA";
};

const decisioniIniziali: Decisione[] = [
  {
    id: 1,
    titolo: "Finitura piscine",
    cantiere: "Tropical Retreat",
    priorita: "ALTA",
    stato: "DA VALUTARE",
  },
  {
    id: 2,
    titolo: "Pavimentazione corridoi",
    cantiere: "Tropical Retreat",
    priorita: "MEDIA",
    stato: "DA VALUTARE",
  },
  {
    id: 3,
    titolo: "Scelta fornitore condizionatori",
    cantiere: "Tropical Retreat",
    priorita: "ALTA",
    stato: "DA VALUTARE",
  },
];

export default function Home() {
  const [decisioni, setDecisioni] = useState(decisioniIniziali);
const [nuovoTitolo, setNuovoTitolo] = useState("");
const [nuovaPriorita, setNuovaPriorita] = useState<"ALTA" | "MEDIA" | "BASSA">("MEDIA");
const [mostraForm, setMostraForm] = useState(false);
  const daValutare = decisioni.filter(
    (decisione) => decisione.stato === "DA VALUTARE"
  ).length;

  function approvaDecisione(id: number) {
    setDecisioni((correnti) =>
      correnti.map((decisione) =>
        decisione.id === id
          ? { ...decisione, stato: "APPROVATA" }
          : decisione
      )
    );
  }
function creaDecisione() {
  if (!nuovoTitolo.trim()) return;

  const nuovaDecisione: Decisione = {
    id: Date.now(),
    titolo: nuovoTitolo.trim(),
    cantiere: "Tropical Retreat",
    priorita: nuovaPriorita,
    stato: "DA VALUTARE",
  };

  setDecisioni((correnti) => [...correnti, nuovaDecisione]);
  setNuovoTitolo("");
  setNuovaPriorita("MEDIA");
  setMostraForm(false);
}
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0b1220",
        color: "#ffffff",
        padding: "32px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ marginBottom: "8px" }}>Felino OS</h1>
      <h2 style={{ marginTop: 0 }}>Centro Direzionale</h2>

      <p style={{ color: "#94a3b8" }}>
        Workspace attivo: <strong>Tropical Retreat</strong>
      </p>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
          marginTop: "32px",
        }}
      >
        <div style={cardStyle}>
          <h3>Decisioni</h3>
          <p>{daValutare} da valutare</p>
        </div>

        <div style={cardStyle}>
          <h3>Missioni</h3>
          <p>14 attive</p>
        </div>

        <div style={cardStyle}>
          <h3>Documenti</h3>
          <p>0 caricati</p>
        </div>
      </section>

      <section style={{ marginTop: "40px" }}>
        <h2>Decisioni operative</h2>
       <button onClick={() => setMostraForm(true)}>Nuova decisione</button>

{mostraForm && (
  <div style={{ ...cardStyle, marginBottom: "16px" }}>
    <input
      type="text"
      placeholder="Titolo decisione"
      value={nuovoTitolo}
      onChange={(e) => setNuovoTitolo(e.target.value)}
    />

    <select
      value={nuovaPriorita}
      onChange={(e) =>
        setNuovaPriorita(e.target.value as "ALTA" | "MEDIA" | "BASSA")
      }
    >
      <option value="ALTA">ALTA</option>
      <option value="MEDIA">MEDIA</option>
      <option value="BASSA">BASSA</option>
    </select>

    <button onClick={creaDecisione}>Crea decisione</button>
  </div>
)}
        <div style={{ display: "grid", gap: "12px" }}>
          {decisioni.map((decisione) => 
            <div
              key={decisione.id}
              style={{
                ...cardStyle,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <div>
                <h3 style={{ margin: "0 0 8px" }}>{decisione.titolo}</h3>

                <div style={{ color: "#94a3b8" }}>
                  {decisione.cantiere} · Priorità {decisione.priorita}
                </div>

                <div style={{ marginTop: "8px" }}>
                  Stato: <strong>{decisione.stato}</strong>
                </div>
              </div>

              {decisione.stato === "DA VALUTARE" && (
                <button
                  onClick={() => approvaDecisione(decisione.id)}
                  style={{
                    border: 0,
                    borderRadius: "8px",
                    padding: "10px 16px",
                    cursor: "pointer",
                    fontWeight: 700,
                  }}
                >
                  Approva
                </button>
              )}
            </div>
            )}      
          
        </div>
      </section>

      <section style={{ marginTop: "40px" }}>
        <h3>Jarvis</h3>
        <p style={{ color: "#94a3b8" }}>
          Centro di comando Felino OS.
        </p>
      </section>
    </main>
  ) ;
}
const cardStyle = {
  background: "#1f2937",
  padding: "20px",
  borderRadius: "12px",
  border: "1px solid #334155",
};
