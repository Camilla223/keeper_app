import React, { useState } from "react";

function CreateArea(props) {
  const [inputNote, setInputNote] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;

    setInputNote((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function addNote(event) {
    props.onAdd(inputNote);
    setInputNote({ title: "", content: "" });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={inputNote.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          onChange={handleChange}
          value={inputNote.content}
          rows="3"
        />
        <button onClick={addNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
