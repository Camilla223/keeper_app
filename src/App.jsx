import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Note from "./components/Note.jsx";
import CreateArea from "./components/CreateArea.jsx";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNote) => {
      return { ...prevNote, newNote };
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note) => {
        return <Note key={note.id} title={note.title} content={note.content} />;
      })}

      <Footer />
    </div>
  );
}

export default App;
