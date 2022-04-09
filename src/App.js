import React , {useState} from 'react';
import Sidebar from './Sidebar';
import Main from './Main';
import Search from "./Search";
import StarredNotes from './StarredNotes';

function App() {
  
const [notes , setNotes] = useState([]);

//get activated note to edit(declaration)
const [activeNote , setActiveNote] = useState(false);

//add function
const handleAddNote = () => {
  const newNote = {
    id: Math.floor(Math.random()*1000),
    title: "title",
    body: "note",
    lastModified: Date.now(),
    starred: false,
  };

  setNotes([newNote , ...notes]);
  setActiveNote(newNote.id);
}


//delete function
const handleDeleteNote = (noteId) => {
    setNotes(notes.filter(({ id }) => id !== noteId));
}


//get active note(function)
const getActiveNote = () => {
  return notes.find(({ id }) => id === activeNote);
}

// edit a note
const handleUpdateNote = (updatedNote) => {
  const updatedNotesArr = notes.map((note) => {
    if(note.id === updatedNote.id){
      return updatedNote;
    }

    return note;
  });

  setNotes(updatedNotesArr);
}

  return (
    <div className="App">
    <Sidebar
    notes={notes}
    handleAddNote={handleAddNote}
    handleDeleteNote={handleDeleteNote}
    activeNote={activeNote}
    setActiveNote={setActiveNote}
    />
    <Main activeNote = {getActiveNote()} handleUpdateNote={handleUpdateNote}/>
   
   <div className='right-side'>
   <Search notes={notes} />
    <StarredNotes />
    </div>
   
    </div>

  );
}

export default App;
