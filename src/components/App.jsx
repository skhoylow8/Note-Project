import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]); //stores an array of notes

  function addNote(note) {
    //adds a new note to the array of notes
    setNotes(prevNotes => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    //deletes a note based on the id passed in
    setNotes(prevNotes => {
      return (
        //returns an array that does not include the id specified
        prevNotes.filter((note, index) => {
          return index !== id;
        })
      );
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((note, index) => {
        //the map function loops through the array
        //and creates a new Note using my note component
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onClicked={deleteNote} //this function is passed to allow the delete button works
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
