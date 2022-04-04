import React , {useState} from 'react';

export default function Search( {notes} ) {

     const [searchTerm, setSearchTerm] = useState("");
   
     const filteredNotes = notes.filter((note) => {
        if( searchTerm === ""){
            return;
        } else if(note.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
            return note;
        }

    }).map((note, id) => {
        return (
        <li key={id}>Title : {note.title && note.title.substr(0,6)} <br />  Note: {note.body && note.body.substr(0,6) + "..."} </li>
        )
    })

  return (
    <div className="Search">
        <div className='search-header'>
        <input type="text" name="text" className="search-input" placeholder="Search any note..." 
        onChange={(event) => {
            setSearchTerm(event.target.value);
        }}
        />
        <img className='search-btn' src="./loupe.png" alt="search icon"  />
        </div>

    
    <ul>

    {filteredNotes}
    
    </ul>
    </div>
  )
}
