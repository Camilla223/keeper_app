import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function onAdd(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function onDelete(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={onAdd} />
      {notes.map((note, id) => {
        return (
          <Note
            key={id}
            id={id}
            title={note.title}
            content={note.content}
            deleteNote={onDelete}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
