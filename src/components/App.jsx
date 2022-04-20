import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [input, setInput] = useState({ title: "", content: "" });
  const [notes, setNotes] = useState([]);

  function addNotes(event) {
    setNotes((prevNotes) => {
      return [...prevNotes, input];
    });

    setInput({ title: "", content: "" });

    event.preventDefault();
  }

  function inputSaved(event) {
    const { value, name } = event.target;
    setInput((prevInput) => {
      if (name === "title") {
        return { title: value, content: prevInput.content };
      } else if (name === "content") {
        return { title: prevInput.title, content: value };
      }
    });
  }

  return (
    <div>
      <Header />
      <CreateArea
        title={input.title}
        content={input.content}
        addedNote={addNotes}
        inputSaved={inputSaved}
      />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
