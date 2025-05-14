import React from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Note from "./components/Note.jsx";
import notes from "./notes.js";

function App() {
  return (
    <div>
      <Header />
      {notes.map((note) => {
        return <Note key={note.id} title={note.title} content={note.content} />;
      })}

      <Footer />
    </div>
  );
}

export default App;
