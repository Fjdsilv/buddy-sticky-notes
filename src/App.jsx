import { useEffect, useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Notes from "./components/Notes";
import data from "./assets/data/Data";
import { toast } from "react-toastify";
import { nanoid } from "nanoid";
 
const localNotes = localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : [...data];

let localCompleted;
if (localStorage.getItem('showCompleted') === null) {
  localCompleted = false;
} else {
  localCompleted = localStorage.getItem('showCompleted') === 'true';
}

const App = () => {
  const [showCompleted, setShowCompleted] = useState(localCompleted);
  const [notes, setNotes] = useState(localNotes)
  

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes])

  useEffect(() => {
    localStorage.setItem('showCompleted', showCompleted.toString());
  }, [showCompleted])

  const addNote = (text) => {
     
    const newNote = {
      id: nanoid(),
      text: text,
      completed: false
    }  
    setNotes([newNote , ...notes]);
    toast.success("Note Add.");
  }

  const deleteNote = (noteId) => {
    const newNotes = notes.filter((note) => note.id !== noteId);
    setNotes(newNotes);
    toast.error("Note Deleted.");
  }

  const editTextNote = (noteId, newText) => {
    const newNotes = notes.map((note) => {
      if (note.id === noteId) {
        return {...note, text: newText}
      }
      else {
        return note
      }
    })
    setNotes(newNotes);
  }

  const checkNote = (noteId) => {
    const checkedNotes = notes.map((note) => {
      if (note.id === noteId) {
        return {...note, completed: !note.completed}
      }
      else {
        return note;
      }
    })
    setNotes(checkedNotes);
  }

  const handleCompleted = () => { 
    setShowCompleted(!showCompleted)
  }

  return (
    <>
      <Header 
        handleCompleted={handleCompleted}
        showCompleted={showCompleted}
      />
      <Form 
        addNote={addNote}
      />
      <Notes 
        notes={notes}
        checkNote={checkNote}
        deleteNote={deleteNote}
        editTextNote={editTextNote}
        showCompleted={showCompleted}
      />
    </>
  )
}
export default App

